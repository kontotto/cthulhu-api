'use strict'

const User = require('./app/models/user');

let user_create = (req, res) => {
  
  // 新しいユーザモデルの作成
  let user = new User(req.body);
  console.log("user:" + user);

  // ユーザー情報のセーブ
  user.save(function(err){
    if (err)
      res.status(409).send(err);
    else
      res.json({message: 'User created!'});
  });
};

let user_get = (req, res) => {
  User.findById(req.params.user_id, function(err, user){
    console.log(req.params.user_id);
    if (err)
      res.send(err);
    
    res.json(user);
  });
};


module.exports = {
  user_create: user_create,
  user_get: user_get
};
