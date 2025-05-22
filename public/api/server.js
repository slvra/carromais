import { create, router as _router, defaults, bodyParser } from 'json-server'
const server = create()
const router = _router('db.json')
const middlewares = defaults()

server.use(middlewares)
server.use(bodyParser)

server.get('/api/dashboard', (req, res) => {
  const db = router.db.value()
  res.jsonp(db.dashboard)
})

server.use('/api', router)

server.listen(3000, () => {
  console.log('JSON Server is running on port 3000')
})