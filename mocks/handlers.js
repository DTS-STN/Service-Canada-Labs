import { rest } from 'msw'
import experimentsFixture from '../cypress/fixtures/experiments.json'

export const handlers = [
  rest.get('https://alphasite-api.dts-stn.com/experiments', async (req, res, ctx) => {
    return res(
      ctx.json(experimentsFixture)
    )
  }),
]