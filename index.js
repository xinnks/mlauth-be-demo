const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mlAuth = require('mlauth-js')

const app = express()
const client = new mlAuth({
  client: process.env.MLAUTH_CLIENT,
  secret: process.env.MLAUTH_SECRET
})

const port = process.env.PORT || 5001;
const testEmail = process.env.EMAIL

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async (req, res) => {
  res.json({
    data: "mlAuth Back-end Demo",
    key: process.env.MLAUTH_CLIENT,
    secret: process.env.MLAUTH_SECRET
  })
})

app.get('/send-magic-link', async (req, res) => {
  const response = await client.login(testEmail)
  res.json({
    data: response
  })
})

app.get('/verify-token', async (req, res) => {
  const { token } = req.query
  const response = await client.verify(token)
  res.json({
    data: response
  })
})

app.listen(port, () => console.log('Server running on port: ', port))
