import { rest } from 'msw'
import projectsFixture from '../cypress/fixtures/projects.json'

export const handlers = [
  rest.get(`${process.env.STRAPI_API_BACKEND_URL}/experiments`, async (req, res, ctx) => {
    return res(
      ctx.json(projectsFixture)
    )
  }),
]