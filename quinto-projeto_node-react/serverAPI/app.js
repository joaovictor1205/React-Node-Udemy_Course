const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();
app.use(bodyParser.json());
app.use(cors());

///////////////// ROTAS /////////////////
const tarefaRouter = require('./routes/tarefasRoutes');
app.use('/gerenciador-tarefas', tarefaRouter);
////////////// END ROTAS ////////////////


app.listen(process.env.PORT, () => {
    console.log(`Servidor ouvindo na porta ${process.env.PORT}`);
});
