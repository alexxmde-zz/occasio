const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('app'))

app.listen(port, err => {
  if(err) {
    console.log(err)
  } else {
    console.log(`Listening to port: ${port}`)
  }
})


