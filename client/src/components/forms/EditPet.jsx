import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useHistory} from 'react-router-dom'
export default ()=>{
    const {id} = useParams();
    const history = useHistory();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [skillOne, setSkillOne] = useState('');
    const [skillTwo, setSkillTwo] = useState('');
    const [skillThree, setSkillThree] = useState('');
    const [errors, setErrors] = useState({});
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res=>{
                setName(res.data.result.name)
                setType(res.data.result.type)
                setDescription(res.data.result.description)
                setSkillOne(res.data.result.skillOne)
                setSkillTwo(res.data.result.skillTwo)
                setSkillThree(res.data.result.skillThree)
            })
            .catch(err=>console.log(err))
    }, [])
    const submitHandler=e=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pets/${id}`, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            .then(res=>{
                console.log(res)
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
            <p>
                <label htmlFor="">Pet Name:</label><br />
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name} />
                <p>{errors.name?.message}</p>
            </p>
            <p>
                <label htmlFor="">Pet Type:</label><br />
                <input type="text" onChange={(e)=>setType(e.target.value)} value={type} />
                <p>{errors.type?.message}</p>
            </p>
            <p>
                <label htmlFor="">Pet Description:</label><br />
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value={description} />
                <p>{errors.description?.message}</p>
            </p>
            <p>
                <label htmlFor="">Skill One (optional):</label><br />
                <input type="text" onChange={(e)=>setSkillOne(e.target.value)} value={skillOne} />
            </p>
            <p>
                <label htmlFor="">Skill Two (optional):</label><br />
                <input type="text" onChange={(e)=>setSkillTwo(e.target.value)} value={skillTwo} />
            </p>
            <p>
                <label htmlFor="">Skill Three (optional):</label><br />
                <input type="text" onChange={(e)=>setSkillThree(e.target.value)} value={skillThree} />
            </p>
            <input type="submit" value="Finish Edit" />
        </form>
    )
}