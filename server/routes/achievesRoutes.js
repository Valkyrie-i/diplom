const Router = require('express');
const router = new Router();
const achievesController = require('./../controllers/achievesController')

router.post('/',achievesController.create)
router.get('/',achievesController.getAll)




module.exports = router