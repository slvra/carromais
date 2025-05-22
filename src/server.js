const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.bodyParser)

server.get('/api/dashboard', (req, res) => {
  const db = router.db.value()
  res.jsonp(db.dashboard)
})

server.use('/api', router)

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000')
})