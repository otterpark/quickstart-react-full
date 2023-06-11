// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from 'msw';


const BASE_URL = 'http://localhost:3000';

const handlers = [
  rest.post(`${BASE_URL}/`, (req, res, ctx) => (
    res(ctx.status(200))
  )),
];

export default handlers;
