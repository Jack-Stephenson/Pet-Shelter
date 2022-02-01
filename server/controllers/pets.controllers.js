const Pet = require('../models/pets.models');

module.exports.findAllPets=(req,res)=>{
    Pet.find()
        .then((allPets)=>res.json({result: allPets}))
        .catch((err)=>res.json({message: 'Ruh Roh Raggy', error: err}))
}
module.exports.findOnePet=(req,res)=>{
    Pet.findOne({_id:req.params.id})
        .then((onePet)=>res.json({result: onePet}))
        .catch((err)=>res.json({message: 'Ruh Roh Raggy', error: err}))
}
module.exports.createPet=(req,res)=>{
    Pet.create(req.body)
        .then((newPet)=>res.json({result: newPet}))
        .catch((err)=>res.json({message: 'Ruh Roh Raggy', error: err}))
}
module.exports.editPet=(req,res)=>{
    Pet.findOneAndUpdate({_id:req.params.id}, req.body, {new: true, runValidators: true})
        .then((editPet)=>res.json({result: editPet}))
        .catch((err)=>res.json({message: 'Ruh Roh Raggy', error: err}))
}
module.exports.deletePet=(req,res)=>{
    Pet.findOneAndDelete({_id:req.params.id})
        .then((deletePet)=>res.json({result: deletePet}))
        .catch((err)=>res.json({message: 'Ruh Roh Raggy', error: err}))
}