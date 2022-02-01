import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useHistory, Link } from 'react-router-dom';

const Detail = () => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const history = useHistory();
    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => setPet(res.data.result))
            .catch(err => console.log(err))
    }, [])
    const adopter = (id) => {
        axios.delete(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                console.log('Adopted' + res)
                history.push('/')
            })
            .catch(err => {
                console.log('error adopting' + err)
            })
    }
    return (
        <div>
            <div>
                <Link to={'/'}>back to home</Link>
            </div>
            <div>
                <button onClick={()=>adopter(pet._id)}>Adopt {pet.name}</button>
            </div>
            <div>
                <p>Name: {pet.name}</p>
                <p>Type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                {pet.skillOne || pet.skillTwo || pet.skillThree
                    ? <div>
                        <p>Skills:</p>
                        <p>{pet.skillOne}</p>
                        <p>{pet.skillTwo}</p>
                        <p>{pet.skillThree}</p>
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}

export default Detail;