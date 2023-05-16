const express = require('express');
const routes = require('./src/routes');
const db = require('./src/database');

const app = express();

db.hasConection();

app.use(express.json());

app.use(routes);

app.listen(3636, () => console.log('servidor rodando na porta 3636' ));