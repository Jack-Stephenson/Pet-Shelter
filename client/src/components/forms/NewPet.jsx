import React, {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import axios from 'axios';
const NewPet = ()=>{
    const history = useHistory();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState({});
    const submitHandler=e=>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pets/new', {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            .then(res=>{
                if(res.data.error){
                    setErrors(res.data.error.errors)
                }
                else{
                    history.push('/')
                }
            })
            .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={submitHandler}>
            <h3>Add a Pet!</h3>
            <button><Link to={'/'}>Home</Link></button>
            <p>
                <label htmlFor="">Pet Name:</label><br />
                <input type="text" onChange={(e)=>setName(e.target.value)} />
                <p>{errors.name?.message}</p>
            </p>
            <p>
                <label htmlFor="">Pet Type:</label><br />
                <input type="text" onChange={(e)=>setType(e.target.value)} />
                <p>{errors.type?.message}</p>
            </p>
            <p>
                <label htmlFor="">Pet Description:</label><br />
                <input type="text" onChange={(e)=>setDescription(e.target.value)} />
                <p>{errors.description?.message}</p>
            </p>
            <p>
                <label htmlFor="">Skill One (optional):</label><br />
                <input type="text" onChange={(e)=>setSkillOne(e.target.value)} />
            </p>
            <p>
                <label htmlFor="">Skill Two (optional):</label><br />
                <input type="text" onChange={(e)=>setSkillTwo(e.target.value)} />
            </p>
            <p>
                <label htmlFor="">Skill Three (optional):</label><br />
                <input type="text" onChange={(e)=>setSkillThree(e.target.value)} />
            </p>
            <input type="submit" value="Submit" />
        </form>
    )
}

export default NewPet;