import React from 'react';


const AuthorForm = props => {
    const {inputs,errors,handleInputChange,handleSubmit,submitValue} = props;
    return (
        <form className='col-5 mx-auto bg-light p-4 round' onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" value={inputs.name} onChange={handleInputChange} className="form-control"/>
                <span className="text-danger"> {errors.name.message ?  errors.name.message : ""} </span>
            </div>
            <div className="form-group">
                <label htmlFor="quote">Quote</label>
                <input type="text" name="quote" value={inputs.quote} onChange={handleInputChange} className="form-control"/>
            </div>
            <input type="submit" value={submitValue} className="btn btn-primary"/>

        </form>
    );
}

export default AuthorForm