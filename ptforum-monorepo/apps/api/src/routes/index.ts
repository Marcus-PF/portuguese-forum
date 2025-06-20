import { Hono } from 'hono'

export const indexRoute = new Hono()

indexRoute.get('/', (c) => {
  return c.json({ message: 'Welcome to the Portuguese Forum API 👋' })
})
