import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        set: (value) => value.toLowerCase()
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

})

const arraySchema = new mongoose.Schema({
    target: {
        type: Number,
        required: false
    },
    accomplished: {
        type: Number,
        required: false
    },
    submissionDate: {
        type: String,
        required: false
    },
    submittedDate: {
        type: String,
        required: false
    }

});

const instructionSchema = new mongoose.Schema({
    _id: false,
    instruction1: {
        _id: false,
        type: [arraySchema],
        required: false
    },
    instruction2: {
        _id: false,
        type: [arraySchema],
        required: false
    },
    instruction3: {
        _id: false,
        type: [arraySchema],
        required: false
    },
    instruction4: {
        _id: false,
        type: [arraySchema],
        required: false
    },
    instruction5: {
        _id: false,
        type: [arraySchema],
        required: false
    },
    instruction6: {
        _id: false,
        type: [arraySchema],
        required: false
    },
    instruction7: {
        _id: false,
        type: [arraySchema],
        required: false
    }
});



const superadminSchema = new mongoose.Schema({
    ...userSchema.obj
})

const campusDirectorSchema = new mongoose.Schema({
    ...userSchema.obj
})

const deanSchema = new mongoose.Schema({
    ...userSchema.obj
})

const riuhSchema = new mongoose.Schema({
    ...userSchema.obj
})

const eiuhSchema = new mongoose.Schema({
    ...userSchema.obj
})

const facultySchema = new mongoose.Schema({
    ...userSchema.obj,
    instructionProperty: {
        type: instructionSchema,
        default: {
            instruction1: [],
            instruction2: [],
            instruction3: [],
            instruction4: [],
            instruction5: [],
            instruction6: [],
            instruction7: []
        }
    }




})



const Superadmin = mongoose.models.Superadmin || mongoose.model('Superadmin', superadminSchema)
const Campusdirector = mongoose.models.Campusdirector || mongoose.model('Campusdirector', campusDirectorSchema)
const Faculty = mongoose.models.Faculty || mongoose.model('Faculty', facultySchema)
const Dean = mongoose.models.Dean || mongoose.model('Dean', deanSchema)
const Riuh = mongoose.models.Riuh || mongoose.model('Riuh', riuhSchema)
const Eiuh = mongoose.models.Eiuh || mongoose.model('Eiuh', eiuhSchema)


export { Superadmin, Campusdirector, Faculty, Dean, Riuh, Eiuh } 