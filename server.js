// 必要なパッケージの読み込み
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cthulhu');

var User = require('./app/models/user');

// POSTでdataを受け取るための記述
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 3001番を指定
var port = process.env.PORT || 3001;

// expressでAPIサーバを使うための準備
var router = express.Router();

router.get('/', function(req, res){
  res.json({message: 'aiueo'});
});

router.route('/users')

  // ユーザの作成 (POST http://localhost:3001/api/users)
  .post(function(req, res) {

    // 新しいユーザのモデルを作成する．
    var user = new User();

    console.log("name" + req.body.name);
    console.log("list" + req.body.list);

    // ユーザの各カラムの情報を取得する．
    user.name = req.body.name;
    user.list = req.body.list;

    // ユーザ情報をセーブする．
    user.save(function(err) {
      if (err)
        res.send(err);
      else
        res.json({ message: 'User created!' });
    });
  })

// ルーティング登録
app.use('/', router);

//サーバ起動
app.listen(port);
console.log('listen on port ' + port);
