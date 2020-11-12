import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import {navigate} from '@reach/router';
import AuthorForm from '../components/AuthorForm';

const Edit = props => {
    const initialAuthor = {
        name:"",
        quote:"",
    }
    const [edit,setEdit] = useState(initialAuthor);

    const [errors,setErrors] = useState(initialAuthor);

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/author/${props.id}`)
            .then(res => setEdit(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const handleInputChange = (e) => {
        setEdit({
            ...edit,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialAuthor);
        e.preventDefault();
        Axios.post(`http://localhost:8000/api/update/author${edit._id}`,edit)
            .then(res => {
                if(res.data.results){
                    navigate(`/author/${edit._id}`);
                }
                else{
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h2>Edit Author</h2>
            <AuthorForm
                inputs={edit}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Edit Author"
            />
        </div>
    )
}

export default Edit;