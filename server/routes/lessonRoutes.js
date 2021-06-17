const Router = require('express');
const router = new Router();
const lessonController = require('./../controllers/lessonController');

router.post('/',lessonController.create)
router.get('/',lessonController.getAll)




module.exports = router