const mongoose = require('mongoose')
const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Pet must have name'],
        minlength: [3, 'Pet name must be at least 3 characters'],
    },
    type: {
        type: String,
        required: [true, 'Pet must have type'],
        minlength: [3, 'Pet type must be at least 3 characters']
    },
    description: {
        type: String,
        required: [true, 'Pet must have description'],
        minlength: [3, 'Pet desctription must be at least 3 characters']
    },
    skillOne: {
        type: String,
        required: [false]
    },
    skillTwo: {
        type: String,
        required: [false]
    },
    skillThree: {
        type: String,
        required: [false]
    }
});

const Pet = mongoose.model('Pet', PetSchema);
module.exports = Pet;