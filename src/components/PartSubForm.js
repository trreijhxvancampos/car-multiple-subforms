import React, {useState} from 'react';
import styles from "../app/page.module.css";

function PartSubForm({index, details, updatePartsDetail}) {
    console.log(`SubForm ${index} rendered`)
    function handleChange(e) {
        const {name, value} = e.target
        updatePartsDetail(index, {...details, [name]: value})
    }

    return (
            <div className={styles['sub-form']}>
                <h4>Part {index + 1}</h4>
                <div className={styles['input-group']}>
                    <label>LABEL: </label>
                    <input type={"text"} name="label" onChange={handleChange}/>
                </div>
                <div className={styles['input-group']}>
                    <label>TYPE: </label>
                    <input type={"text"} name="type" onChange={handleChange}/>
                </div>
                <div className={styles['input-group']}>
                    <label>BRAND: </label>
                    <input type={"text"} name="brand" onChange={handleChange}/>
                </div>
                <div className={styles['input-group']}>
                    <label>MODEL: </label>
                    <input type={"text"} name="model" onChange={handleChange}/>
                </div>
            </div>

    );
}

export default React.memo(PartSubForm);