var Actor = require("../models/actor.js")
module.exports = function(app, io) {
    app.get('/list-actors', function(req, res) {
        Actor.fetchAll(function(err, doc) {
            if (err) {
                console.log("Request at /list-actors: ".info + "fail".error)
                return
            }
            console.log("Request at /list-actors: ".info + "Success".success)
            res.end(JSON.stringify(doc))
        })

    })
    app.get('/insert-actors', function(req, res) {
        var name = req.query.name
        var dob = req.query.dob
        var image_path = req.query.img
        var actor = {
            name: name,
            dob: dob,
            image_path: "actor-img/" + image_path
        }
        Actor.insertActor(actor, function(err, doc) {
            if (err) return
            res.end("inserted")
        })
    })

}
