// 必要なパッケージの読み込み
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cthulhu');

var api = require('./api');

// POSTでdataを受け取るための記述
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;


// expressでAPIサーバを使うための準備
var router = express.Router();

router.route('/users')
  .post(api.user_create)

router.route('/users/:user_id')
  .get(api.user_get)

app.use('/', router);

app.listen(port);
console.log('listen on port ' + port);
