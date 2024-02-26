import React from 'react';
import styles from "../app/page.module.css";

function Modal({ isOpen, onClose, subFormValues})  {
    if (!isOpen) return null;
    return (
        <div className={styles['modal-overlay']}>
            <div className={styles['modal']}>
                <button className="close-button" onClick={onClose}>X</button>
                <div className={styles['modal-content']}>
                    <h2>Car Details:</h2>

                    {subFormValues && subFormValues.length > 0 ? (

                        <table>
                            <thead>
                            <tr>
                                <th>Brand</th>
                                <th>Model</th>
                                <th>Year</th>
                            </tr>
                            </thead>
                            <tbody>
                            {subFormValues.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.brand}</td>
                                    <td>{item.model}</td>
                                    <td>{item.year}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Modal;