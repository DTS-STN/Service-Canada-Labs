import { rest } from "msw";
import experimentsFixture from "../cypress/fixtures/experiments.json";

export const handlers = [
  rest.get(
    `${process.env.NEXT_PUBLIC_STRAPI_API_BACKEND_URL}/experiments`,
    async (req, res, ctx) => {
      return res(ctx.json(experimentsFixture));
    }
  ),
];
