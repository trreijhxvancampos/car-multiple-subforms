import React, {useEffect, useState} from 'react';
// import PropTypes from 'prop-types';

// SubForm.propTypes = {};

function SubForm({index, onChange}) {

    const [record, setRecord] = useState({
        brand: "",
        model: "",
        year: "",
    })
    useEffect(() => {
        onChange(index, record)
    }, [record]);

    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value

        setRecord(prevState => ({
            ...prevState,
            [name]: value
        }))

    }

    return (
        <div>
            <label>BRAND: </label>
            <input type={"text"} name="brand" onInput={handleChange}/>
            <label>MODEL: </label>
            <input type={"text"} name="model" onInput={handleChange}/>
            <label>YEAR: </label>
            <input type={"text"} name="year" onInput={handleChange}/>
        </div>
    );
}

export default SubForm;