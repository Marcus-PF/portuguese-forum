import { serve } from '@hono/node-server'
import { app } from './server'

console.log('🔧 Dev server running on http://localhost:8787')
serve({ fetch: app.fetch, port: 8787 })
