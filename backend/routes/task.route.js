const express = require('express');
const router = express.Router();
// Colocar controller que ainda não foi criado
const task_controller = require('../controllers/task.controller');

router.post('/create', task_controller.create);

router.get('/', task_controller.read);

router.post('/check', task_controller.checked);

router.post('/discheck', task_controller.dischecked);

router.post("/update", task_controller.update);

router.post('/delete', task_controller.delete);



module.exports = router;
