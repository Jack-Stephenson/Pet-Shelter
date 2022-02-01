import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const PetList = () => {
    const [petList, setPetList] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => {
                setPetList(res.data.result)
            })
            .catch(err => {
                console.log('Ruh Roh Raggy' + err)
            })
    }, [])
    const sortPets = (pets) =>{
        pets.sort((a, b)=>{
            let typeA = a.type.toUpperCase();
            let typeB = b.type.toUpperCase();
            return (typeA<typeB)?-1:(typeA>typeB)?1:0;
        });
        console.log(pets)
    }
    return (
        <div>
            <p><Link to={'/create'}>Add a Pet!</Link></p>
            <div>
                {sortPets(petList)}
                {petList.map((pet, i) => {
                    return (
                        <div key={i}>
                            <p>Meet {pet.name}, a {pet.type}!</p>
                            <p><button><Link to={`/pets/${pet._id}`}>Details</Link></button>|<button><Link to={`/pets/edit/${pet._id}`}>Edit</Link></button></p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default PetList;