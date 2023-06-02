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
        required: true
    },
    accomplished: {
        type: Number,
        required: true
    },
    submissionDate: {
        type: String,
        required: true
    },
    submittedDate: {
        type: String,
        required: true
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
        type: [arraySchema],
        required: false
    },
    researchProperty: {
        type: [arraySchema],
        required: false
    },
    extensionProperty: {
        type: [arraySchema],
        required: false
    },
    supportProperty: {
        type: [arraySchema],
        required: false
    },
    administrativeProperty: {
        type: [arraySchema],
        required: false
    }


})



const Superadmin = mongoose.models.Superadmin || mongoose.model('Superadmin', superadminSchema)
const Campusdirector = mongoose.models.Campusdirector || mongoose.model('Campusdirector', campusDirectorSchema)
const Faculty = mongoose.models.Faculty || mongoose.model('Faculty', facultySchema)
const Dean = mongoose.models.Dean || mongoose.model('Dean', deanSchema)
const Riuh = mongoose.models.Riuh || mongoose.model('Riuh', riuhSchema)
const Eiuh = mongoose.models.Eiuh || mongoose.model('Eiuh', eiuhSchema)


export { Superadmin, Campusdirector, Faculty, Dean, Riuh, Eiuh } 