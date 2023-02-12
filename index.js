const http = require('http')
const app = require('./app')
const { PORT } = process.env
const port = process.env.PORT || PORT

const server = http.createServer(app)
server.listen(port, () => {
    console.log(`Listening for requests on port ${port}`);
})
