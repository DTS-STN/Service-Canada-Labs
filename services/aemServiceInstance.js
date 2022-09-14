import AEMService from './AEMService'

const aemServiceInstance = process.env.NODE_ENV !== 'test' ? new AEMService(
  process.env.AEM_GRAPHQL_ENDPOINT,
  process.env.BUILD_DATE
) : {}

export default aemServiceInstance
