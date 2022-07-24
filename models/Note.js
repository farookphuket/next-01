const mongoose = require('mongoose')


const NoteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,'title is required'],
        unique:true,
        trim:true,
        maxlength:[40,'title is too long']
    },
    body:{
        type:String,
        required:[true,'body is required'],
        trim:true,
        maxlength:[200,'body is too long']
    }

})

module.exports = mongoose.models.Note || mongoose.model('Note',NoteSchema)
