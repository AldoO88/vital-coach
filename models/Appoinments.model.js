const { Schema, model } = require("mongoose");
const { patientSchema } = require('./Patients.model');
const { TrainerSchema } = require('./Trainer.model');

const appoinmentSchema = new Schema({
    date: {
        type: Date,
        require: true
    },
    status:{
        type: String,
        enum: ['attended', 'cancelled', 'not attended', 'in progress']
    },
    patient: { 
        type: Schema.ObjectId, 
        ref: 'Patient' 
    },
    trainer: { 
        type: Schema.ObjectId, 
        ref: 'Trainer' 
    }
})

const Appoinment = model('Appoinment', appoinmentSchema);
module.exports = Appoinment;