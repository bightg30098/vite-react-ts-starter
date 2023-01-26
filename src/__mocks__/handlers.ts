import { rest } from 'msw'

export const handlers = [
  rest.get(/api/, (req, res, ctx) => {
    return res(ctx.json({ message: 'Hello there!' }))
  }),
]
