const express = require('express')
const cors = require('cors')

const app = express();

app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

const PORT = process.env.PORT|| 7000;

app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`))

app.get('/', (req, res) => {
    res.send('I am running')
})