import React from 'react';
import styles from "../app/page.module.css";

function Modal({carDetails, partsDetail, closeModal,}) {
    console.log('Modal is rendered')

    return (
        <div className={styles['modal-overlay']}>
            <div className={styles['modal']}>
                <button className="close-button" onClick={closeModal}>X</button>
                <div className={styles['modal-content']}>
                    <h2>Car Detail:</h2>
                    {carDetails ? (
                            <table>
                                <thead>
                                <tr>
                                    <th>Brand</th>
                                    <th>Make</th>
                                    <th>Model</th>
                                    <th>Year</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{carDetails.brand}</td>
                                    <td>{carDetails.make}</td>
                                    <td>{carDetails.model}</td>
                                    <td>{carDetails.year}</td>
                                </tr>
                                </tbody>
                            </table>
                        )
                        : (<p>No data available</p>)
                    }

                    <h2>Parts:</h2>
                    {partsDetail && partsDetail.length > 0 ? (
                        <table>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Label</th>
                                <th>Type</th>
                                <th>Brand</th>
                                <th>Model</th>
                            </tr>
                            </thead>
                            <tbody>
                            {partsDetail.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.label}</td>
                                    <td>{item.type}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.model}</td>
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

// export default React.memo(Modal);
export default Modal;