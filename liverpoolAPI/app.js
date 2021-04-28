let express = require('express')
let bodyParser = require('body-parser')

let port = 3000
let app = express()

let index = require('./routes/index')
let persons = require('./routes/eventos')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));
app.use('/', index);
app.use('/api', persons);

app.listen(port, () =>{
    console.log(`servidor iniciado en puerto ${port}`);
});