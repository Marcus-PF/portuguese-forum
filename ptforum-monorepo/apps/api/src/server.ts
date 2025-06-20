import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { indexRoute } from './routes'

export const app = new Hono()

app.use('*', logger())
app.use('*', cors())

app.route('/', indexRoute)
