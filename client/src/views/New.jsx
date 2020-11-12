import React, {useState} from 'react';
import Axios from 'axios';
import AuthorForm from '../components/AuthorForm';
import { navigate } from '@reach/router';

const New = props => {
    const initialAuthor = {
        name:"",
        quote:"",
    }

    const [author,setAuthor] = useState(initialAuthor);

    const [errors,setErrors] = useState(initialAuthor);

    const handleInputChange = (e) => {
        setAuthor({
            ...author,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e) => {
        setErrors(initialAuthor);
        e.preventDefault();
        Axios.post("http://localhost:8000/api/create/author",author)
            .then(res => {
                if(res.data.results){
                    navigate('/');
                }
                else{
                    setErrors(res.data);
                }
            })
            .catch(err => console.log(err));
    }

    return(
        <div>
            <h2>Create Author</h2>
            <AuthorForm
                inputs={author}
                errors={errors}
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                submitValue="Create Author"
            />
        </div>
    )
}

export default New;