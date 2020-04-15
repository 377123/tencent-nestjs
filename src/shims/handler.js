const { createServer, proxy } = require('tencent-serverless-http')

module.exports.handler = (event, context) => {
  const app = require.fromParentEnvironment('./dist/main')
  const server = createServer(app, null, app.binaryTypes || [])
  return proxy(server, event, context, 'PROMISE').promise
}
