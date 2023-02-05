
O objetivo é criar uma API para cadastrar veículos. 
Os dados de cadsatro serão:
id (placa),
brand(marca)
model (modelo), 
color (cor),
year (ano),

A API deverá:

  * Cadastrar um veículo;
  * Buscar um veículo por id;
  * Buscar um veículo pela marca;
  * Alterar e atualizar os dados de um veículo;
  * Excluir um veículo;
  

Ao baixar o repositório instalar os pacotes do express, sqlite, dotenv, nodemon.
Use npm start para iniciar a aplicação.

Para cadastrar um veículo utilize o POST.
será necessário inserir os campos:
id(placa)
brand(marca)
model(modelo)
color(cor)
year(ano)

{
	"id": "FHQ-5448",
	"brand": "fiat",
	"model": "uno",
	"color": "verde",
	"year": "2012"
}

COMANDOS DE BUSCA 
GET: busca a lista de carros salva no banco de dados
GET ONE: busca veículo pela placa (id)
GET ONE: busca veículo pela marca


PATCH: alterar dados de um veículo. É necessário passar o id do veículo na URL e o campo que deseja atualizar no corpo da requisição:<br>

DELETAR 
DELETE: apagar veículo. É necessário passar o id do vepiculo na URL 
