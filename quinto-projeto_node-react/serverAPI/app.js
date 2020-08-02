const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(bodyParser.json());
app.use(cors());

//ROTAS
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen(process.env.PORT, () => {
    console.log(`Servidor ouvindo na porta ${process.env.PORT}`);
});
