const PetController = require('../controllers/pets.controllers');

module.exports=(app)=>{
    app.get('/api/pets', PetController.findAllPets),
    app.get('/api/pets/:id', PetController.findOnePet),
    app.post('/api/pets/new', PetController.createPet),
    app.put('/api/pets/:id', PetController.editPet),
    app.delete('/api/pets/:id', PetController.deletePet)
};