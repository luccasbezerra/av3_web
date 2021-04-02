var Task = require('../models/task.model');

exports.create = function (req, res) {
    console.log(req.body)
    let task = new Task({
        task: req.body.taskName,
        data: Date.parse(req.body.data),
        feito: false});

    task.save().then((data)=> {
        console.log(data);
        res.send('Registo de task criado com sucesso')
    }).catch((err)=> {
        console.log(err);
    })
};

exports.read = function (req, res) {
    Task.find({}, function (err, task) {
        if (err) return err;
            res.send(task);
    })
};

exports.update = function (req, res) {
    Task.findOne({task:req.body.taskName, data: Date.parse(req.body.data)}, function (err, task) {
        if (err) return err;
            task.task = req.body.NovoTaskName;
            task.data = Date.parse(req.body.NovaData);
            task.feito = req.body.feito;

            task.save()
            res.send(task);
    })
};

exports.checked = function (req, res) {
    console.log(req.body.taskName)
    console.log(Date.parse(req.body.data))

    Task.findOne({task:req.body.taskName, data: Date.parse(req.body.data)}, function (err, task) {
        if (err) return err;
            task.task = req.body.taskName;
            task.data = Date.parse(req.body.data);
            task.feito = true;

            task.save()
            res.send(task);
    })
};

exports.dischecked = function (req, res) {
    console.log(req.body.taskName)
    console.log(Date.parse(req.body.data))

    Task.findOne({task:req.body.taskName, data: Date.parse(req.body.data)}, function (err, task) {
        if (err) return err;
            task.task = req.body.taskName;
            task.data = Date.parse(req.body.data);
            task.feito = false;

            task.save()
            res.send(task);
    })
};

exports.delete = function (req, res) {
    console.log(req.params)
    Task.findOneAndRemove({task:req.body.taskName, data: Date.parse(req.body.data)}, function (err) {
        if (err) return err;
        else res.send('Task Deletada')
    })
};