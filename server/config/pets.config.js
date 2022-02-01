const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://root:root@belt-api.apwn4.mongodb.net/beltAPI?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log('Database connection establish captain!'))
    .catch(err=> console.log('Ruh Roh Raggy', err))