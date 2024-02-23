import React from 'react';

function Modal({subFormValues}) {
    return (
        <div>
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
    );
}

export default Modal;