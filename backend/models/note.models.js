const mongoose= require ("mongoose");

const noteSchema = mongoose.Schema(
    {
        title:String,
        content:String
    }
)

const Notes = mongoose.model("note",noteSchema);

module.exports = Notes;