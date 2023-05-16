const Servicos = require('../models/servico');

const servicoController = {
    async listarServicos(req, res) {
        try {
            const listaDeServicos = await Servicos.findAll(); // Busca todos os serviços cadastrados no banco de dados

            res.json(listaDeServicos); // Retorna a lista de serviços como resposta em formato JSON
        } catch (error) {
            console.error(error);
            res.status(500).json('Erro ao listar serviços'); // Retorna uma mensagem de erro com status 500 caso ocorra uma exceção
        }
    },

    cadastrarServico: async (req, res) => {
        try {
            const { servico, preco } = req.body;

            // Cria um novo serviço com os dados fornecidos
            const novoServico = await Servicos.create({
                servico,
                preco
            });

            // Retorna o novo serviço criado na resposta
            res.status(201).json(novoServico);
        } catch (error) {
            console.error(error);
            res.status(500).json('Erro ao cadastrar serviço');
        }
    },

    atualizarServico: async (req, res) => {
        try {
            const { id } = req.params;
            const { servico, preco } = req.body;

            // Atualiza o serviço com os dados fornecidos
            const servicoAtualizado = await Servicos.update(
                {
                    servico: servico,
                    preco: preco
                },
                {
                    where: { id: id }
                }
            );

            res.json('Serviço atualizado com sucesso');
        } catch (error) {
            console.error(error);
            res.status(500).json('Erro ao atualizar serviço');
        }
    },

    selecionarServico: async (req, res) => {
        try {
            const { id } = req.params;

            // Seleciona o serviço com base no ID fornecido
            const servico = await Servicos.findByPk(id);

            if (servico) {
                // Se o serviço for encontrado, retorna na resposta
                res.json(servico);
            } else {
                // Caso contrário, retorna um status 404 indicando que o serviço não foi encontrado
                res.status(404).json('Serviço não encontrado');
            }
        } catch (error) {
            console.error(error);
            res.status(500).json('Erro ao selecionar serviço');
        }
    },
    deletarServico: async (req, res) => {
        try {
            const { id } = req.params;

            await Servicos.destroy({
                where: {
                    id: id
                }
            });

            res.json('Serviço deletado com sucesso');
        } catch (error) {
            console.error(error);
            res.status(500).json('Erro ao deletar serviço');
        }
    }
};

module.exports = servicoController;
