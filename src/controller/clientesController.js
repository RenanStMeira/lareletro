const { DataTypes } = require("sequelize");
const Clientes = require("../models/clientes");

const clientesController = {
    async cadastrarCliente(req, res) {
        try {
            console.log(req.auth);
            const { nome, email, senha, contato } = req.body;
            const novoCliente = await Clientes.create({
                nome,
                email,
                senha,
                contato
            });
        
            res.status(201).json(novoCliente);
        } catch (error) {
            return res.status(500).json(`Erro ao cadastrar, tente novamente: ${error}`);
        }
    },

    listarClientes: async (req, res) => {
        try {
            const listarClientes = await Clientes.findAll();
            res.json(listarClientes);
        } catch (error) {
            return res.status(500).json('Ocorreu um erro ao listar clientes');
        }
    },

    async atualizarCliente(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha, contato } = req.body;

            if (!id) return res.status(400).json('ID não encontrado');

            await Clientes.update(
                {
                    nome,
                    email,
                    senha,
                    contato
                },
                {
                    where: {
                        id,
                    }
                }
            );

            res.json('Cliente atualizado');
        } catch (error) {
            return res.status(500).json(`Erro ao atualizar cliente, tente novamente: ${error}`);
        }
    },

    async deletarClientes(req, res) {
        try {
            const { id } = req.params;

            await Clientes.destroy({
                where: {
                    id,
                },
            });

            res.status(204).json(`Cliente deletado com sucesso.`);
        } catch (error) {
            return res.status(500).json('Ocorreu um erro ao deletar cliente');
        }
    },
};

module.exports = clientesController;