import {createMocks} from "node-mocks-http";
import handler from "../../pages/api/sign-up";
import {submitEmail} from "../../lib/notify/submitEmail";
import {closeConnection, connectToDatabase} from "../../lib/mongodb/connect";

jest.mock("../../lib/notify/submitEmail")


describe("sign up api", ()  => {
    let conn
    beforeAll(async () => {
        conn = await connectToDatabase(process.env.MONGO_URL, "testdbusersignup")
    })
    beforeEach(() => {
        submitEmail.mockRestore()
        process.env.USER_SIGNUP_ENGLISH_TEMPLATE_ID="english"
        process.env.USER_SIGNUP_FRENCH_TEMPLATE_ID="french"
        process.env.MONGO_DB="testdbusersignup"
    })
    afterEach(async () => {
        delete process.env.MONGO_DB
        delete process.env.USER_SIGNUP_ENABLED
        await conn.db.collection("users").deleteMany()
    })
    afterAll(async () =>{
        await closeConnection()
    })
    it("returns a 201 response when a user is created", async () => {
        process.env.USER_SIGNUP_ENABLED = true
        submitEmail.mockResolvedValue([201, {data: "some data"}])
        const {req, res} = createMocks({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: {
                language: "en",
                email: "email@email.com",
                other: "content"
            }
        })

        await handler(req, res)
        let user = await conn.db.collection("users").findOne({email: "email@email.com"})
        expect(res._getStatusCode()).toBe(201)
        expect(res._getData()).toBe("USER CREATED")
        expect(user).not.toBeNull()
        expect(submitEmail.mock.calls[0][2]).toBe("english")
    })

    it("uses french template when fr is specified", async () => {
        process.env.USER_SIGNUP_ENABLED = true
        submitEmail.mockResolvedValue([201, {data: "some data"}])
        const {req, res} = createMocks({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: {
                language: "fr",
                email: "email@email.com",
                other: "content"
            }
        })

        await handler(req, res)
        expect(res._getStatusCode()).toBe(201)
        expect(submitEmail.mock.calls[0][2]).toBe("french")
    })

    it("returns 400 when data is not correct", async () => {
        process.env.USER_SIGNUP_ENABLED = true
        submitEmail.mockResolvedValue([201, {data: "some data"}])
        const {req, res} = createMocks({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: {
                language: "hfwiofwe",
                email: "email email.com",
                other: "content"
            }
        })

        await handler(req, res)
        let responseData = res._getJSONData()
        expect(res._getStatusCode()).toBe(400)
        expect(responseData.error.length).toBe(2)
    })

    it("returns 400 error when duplicate entry is attempted", async () =>{
        process.env.USER_SIGNUP_ENABLED = true
        await conn.db.collection("users").insertOne({email: "email@email.com"})
        submitEmail.mockResolvedValue([201, {data: "some data"}])
        const {req, res} = createMocks({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: {
                language: "en",
                email: "email@email.com",
                other: "content"
            }
        })

        await handler(req, res)
        let responseData = res._getJSONData()
        expect(res._getStatusCode()).toBe(400)
        expect(responseData.reason).toBe("MongoError")
    })

    it("returns 500 error when Notify fails", async () => {
        process.env.USER_SIGNUP_ENABLED = true
        submitEmail.mockImplementationOnce((...args) =>{ throw new Error("some error")})
        const {req, res} = createMocks({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: {
                language: "en",
                email: "email@email.com",
                other: "content"
            }
        })

        await handler(req, res)
        let responseData = res._getJSONData()
        expect(res._getStatusCode()).toBe(500)
        expect(responseData.reason).toBe("Notify")
    })

    it("deletes the user when Notify fails", async () => {
        process.env.USER_SIGNUP_ENABLED = true
        submitEmail.mockImplementationOnce((...args) =>{ throw new Error("some error")})
        const {req, res} = createMocks({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: {
                language: "en",
                email: "email@email.com",
                other: "content"
            }
        })

        await handler(req, res)
        let user = await conn.db.collection("users").findOne({email: "email@email.com"})
        let responseData = res._getJSONData()
        expect(user).toBe(null)
        expect(res._getStatusCode()).toBe(500)
        expect(responseData.reason).toBe("Notify")
    })

    it("returns 200 when USER_SIGNUP_ENABLED is false", async () => {
        submitEmail.mockImplementationOnce((...args) =>{ throw new Error("some error")})
        const {req, res} = createMocks({
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Origin": "http://localhost:3000"
            },
            body: {
                language: "en",
                email: "email@email.com",
                other: "content"
            }
        })
        await handler(req, res)
        expect(res._getStatusCode()).toBe(200)
    })


})