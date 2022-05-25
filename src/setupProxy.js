const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function (app) {
  app.use(
    "/sockjs-node",
    createProxyMiddleware("/sockjs-node", {
      target: "ws://localhost:3000",
      ws: true,
    })
  )
  app.use(
    "/admin/graphql",
    createProxyMiddleware("/admin/graphql", {
      target: "http://localhost:8000",
      changeOrigin: true,
      ws: true,
    })
  )
  app.use(
    "/media",
    createProxyMiddleware("/media", {
      target: "http://localhost:8000",
    })
  )
}
