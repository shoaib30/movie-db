var mongoose = require('mongoose');

//defining the schema of the DB
var ActorSchema = mongoose.Schema({
    name: String,
    dob: Date,
    image_path: String
});

ActorSchema.statics.insertActor = function(actor, callback) {
    var actor = new this(actor);
    actor.save(function(err, doc) {
        if (err) {
            console.log("Insert new actor: ".info + "fail".error + ":" + ("" + err).data);
            return callback(err, null);
        }
        console.log("Insert new actor: ".info + "Success".success + ":" + doc.name.data);
        callback(null, doc);
    });
}
ActorSchema.statics.fetchAll = function(callback) {
    this.find({}).exec(callback)
}
module.exports = mongoose.model('Actor', ActorSchema);
