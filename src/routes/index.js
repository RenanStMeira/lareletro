const express = require('express');
const servicoController = require('../controller/servicoController');
const clientesController = require('../controller/clientesController');
const authLoginValidation = require('../validations/auth/login');
const authController = require('../controller/authController');

const routes = express.Router();

//rotas de servicos
routes.get('/servicos', servicoController.listarServicos);
routes.post('/servico/cadastro', servicoController.cadastrarServico);
routes.put('/servico/:id', servicoController.atualizarServico);
routes.delete('/servico/:id', servicoController.deletarServico);

//Rotas de clientes
routes.get('/clientes', clientesController.listarClientes);
routes.post('/cadastrar', clientesController.cadastrarCliente);
routes.put('/cliente/:id', clientesController.atualizarCliente);
routes.delete('/cliente/:id', clientesController.deletarClientes);

// Login
routes.post('/login', authLoginValidation, authController.login);


module.exports = routes;
08000859640