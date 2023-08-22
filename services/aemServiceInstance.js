import AEMService from "./AEMService";

const aemServiceInstance = new AEMService(process.env.AEM_GRAPHQL_ENDPOINT);

export default aemServiceInstance;
