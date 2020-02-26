var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('index', { title: 'Express' });
// });

// module.exports = router;


const JSEncrypt = require('node-jsencrypt');

exports.encrypt = function(req, res) {
    let param = req.body;
    try {
        let data = _encrypt(param.data, param.publicKey);
        res.json({
            Data: data,
            Error: null
        });
    } catch (error) {
        res.json({
            Data: null,
            Error: error
        });
    }

};

function _encrypt(data, publicKey) {
    let encrypt = new JSEncrypt();
    encrypt.setPublicKey(publicKey);
    return encrypt.encrypt(data);
};