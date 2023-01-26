const express = require('express')
const { execSync } = require('child_process')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/health', (req, res ) => {
  // eslint-disable-next-line
  console.log('updated')
  try {
    execSync('npm run custom-health-check')
  } catch (e) {
    return res.status(400).send('error')
  }
  res.send('Ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
