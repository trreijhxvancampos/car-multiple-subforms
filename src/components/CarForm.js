import React from 'react';
import styles from "../app/page.module.css";

function CarForm({carDetails, updateCarDetails}) {
    console.log('CarForm Rendered')

    function handleChange(e) {
        const {name, value} = e.target
        updateCarDetails({...carDetails, [name]: value})
    }

    return (
        <>
            <h1>Car Details</h1>
            <div className={styles['form-container']}>
                <div className={styles['form']}>
                    <div className={styles['input-group']}>
                        <label>BRAND: </label>
                        <input type={"text"} name="brand" onChange={handleChange}/>
                    </div>
                    <div className={styles['input-group']}>
                        <label>MAKE: </label>
                        <input type={"text"} name="make" onChange={handleChange}/>
                    </div>
                    <div className={styles['input-group']}>
                        <label>MODEL: </label>
                        <input type={"text"} name="model" onChange={handleChange}/>
                    </div>
                    <div className={styles['input-group']}>
                        <label>YEAR: </label>
                        <input type={"text"} name="year" onChange={handleChange}/>
                    </div>
                </div>
            </div>
        </>

    )
}

export default React.memo(CarForm);
