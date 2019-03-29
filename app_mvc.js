var express = require('express');
var app = express();

var templating = require('consolidate');
app.engine('hbs', templating.handlebars);
app.set('view engine', 'hbs');
app.set('views', __dirname + ''); // + '/views'

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('css'));




app.get('/', require('./cont/cont_list'));
app.post('/add', require('./cont/cont_add'));
app.post('/delete', require('./cont/cont_delete'));
app.post('/update', require('./cont/cont_update'));


app.listen(8090);
console.log('Express in port 8090');

