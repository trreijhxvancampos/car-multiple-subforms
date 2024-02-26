import React, {useEffect, useState} from 'react';
import styles from "../app/page.module.css";
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
        <div className={styles['sub-form']}>
            <div className={styles['input-group']}>
                <label>BRAND: </label>
                <input type={"text"} name="brand" onInput={handleChange}/>
            </div>
            <div className={styles['input-group']}>
                <label>MODEL: </label>
                <input type={"text"} name="model" onInput={handleChange}/>
            </div>
            <div className={styles['input-group']}>
                <label>YEAR: </label>
                <input type={"text"} name="year" onInput={handleChange}/>
            </div>
        </div>
    );
}

export default SubForm;