const express = require('express') /* Importando o express */
const app = express () /* Instaciar o express e associar ao app */
const bodyParser = require('body-parser') /* Irá realizar um parser no corpo da requsição e jogando no request.body */

app.use(bodyParser.urlencoded({extended: true})) /* bodyParser.urlencodede é o padrão que vem na submissão, sem nenhuma mudança  */

app.post('/usuarios', (req, resp) => { /* Acessando o mesma pasta de clientes que usamos no HTML, e será colocada nessa URL */

    /* Aqui seria a função do meio, onde passamos a requisição e depois oque deve ser feito na resposta (req, resp) */

    console.log(req.body)
    resp.send('Parabens')
    

app.listen(3003)