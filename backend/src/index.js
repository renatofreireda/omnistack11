const express = require('express');
const cors = require('cors');
const routes = require('./routes');



/**Antes das requisição, é informado ao APP que as requisições serão em formato JSON */
const app = express();

app.use(cors()); 
/* app.use(cors({
   origin: 'http://meuapp.com'
})); */


/** NA requisição é covnertida em Json */
app.use(express.json());
app.use(routes);
/**
 * Rota / Recurso
 * 
 */

 /**
  * Método HTTP
  * GET: Buscar/listar informação do Backend
  * POST: Criar informação no Backend
  * PUT: ALterar informação no Bakcend
  * DELETE: Deletar informção no Backend    
  */
 /**
  * Tipos de Parâmetros
  * Quary Params: Parâmetros nomeados enviaados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos (exemplo /:id)
  * Request Body: Corpo da requisição utilizado para criar ou alterar recursos
  * 
  */

  /**
   * Bando de Dados
   * SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
   * NoSQL: MongoDB,CouchDB, etc
   * 
   * Driver: SELECT * from users
   * Query Builder: table('users').select('*').where()
   */


app.listen(3333);