import * as http from 'http'
import * as queryString from 'query-string'

const server = http.createServer((req, res) => {
  switch (req.method) {
    case 'GET':
      res.writeHead(200, { 'Content-Type': 'text/html' })

      res.end(`
            <h1>Form</h1>
            <form method="post" action="/">
                <p><input type="text" name="name"/></p>
                <p><input type="text" name="surname"/></p>
                <p><input type="email" name="email"/></p>
                <p><input type="date" name="birthday"/></p>
                <button type="submit">Send</button>
            </form>
            `)
      break
    case 'POST':
      let chunks = []

      req.on('data', (data) => {
        chunks.push(data)
      })

      req.on('end', () => {
        const string = chunks.join('')
        const post = queryString.parse(string)

        res.writeHead(200, { 'Content-Type': 'text/html' })

        res.end(`
        <h1>Your personal data:</h1>
        <p>Name: ${post?.name ?? ''}</p>
        <p>Surname: ${post?.surname ?? ''}</p>
        <p>Email: ${post?.email ?? ''}</p>
        <p>Birthday: ${post?.birthday ?? ''}</p>
        `)
      })
      break

    default:
      res.writeHead(400, { 'Content-Type': 'text/html' })

      res.end(`
      <h1>Oops ... Something bad happened</h1>
      `)
      break
  }
})

server.listen(3000, () => {
  console.log('server is runnig ...')
})
