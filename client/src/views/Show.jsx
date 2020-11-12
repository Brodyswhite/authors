import React,{useState,useEffect} from 'react';
import Axios from 'axios';
import { navigate } from '@reach/router';


const Show = props => {
    const [author,setAuthor] = useState({
        author:"",
        quote:"",
    });

    useEffect(() => {
        Axios.get(`http://localhost:8000/api/author/${props.id}`)
            .then(res => setAuthor(res.data.results))
            .catch(err => console.log(err))
    },[props])

    const destroyAuthor = () => {
        Axios.delete(`http://localhost:8000/api/destroy/author/${props.id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <div className="mx-auto p-5 col-6">
            <h2>{author.name}</h2>
            <li className="list-group-item">Quotes: {author.quote}</li> 

            <button onClick={destroyAuthor}>Destroy {author.name}</button>
        </div>
    );
}

export default Show;