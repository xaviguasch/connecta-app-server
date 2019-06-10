const express = require('express')

const app = express()

app.get('/', (req, res) => res.send({ msg: 'Welcome to the Connecta API' }))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
