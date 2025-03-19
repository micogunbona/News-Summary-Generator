const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()


const app = express()
app.use(express())
app.use(cors())

const port = process.env.PORT || 8000



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
