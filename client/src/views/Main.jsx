import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {

    const[author,setAuthor] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/author')
            .then(res => setAuthor(res.data.results))
            .catch(err => console.log(err));
    },[])

    return(
        <table className="table table-danger">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Quote</th>
                </tr>
            </thead>
            <tbody>
                {
                    author.map((a,i) => <tr key={i}>
                                    <td>{a.name}</td>
                                    <td>{a.quote}</td>
                                    <td>
                                        <Link to={`/edit/${a._id}`}>Edit |</Link>
                                        <Link to={`/author/${a._id}`}> Show</Link>
                                    </td>
                        </tr>)
                }
            </tbody>
        </table>
    );
}

export default Main;