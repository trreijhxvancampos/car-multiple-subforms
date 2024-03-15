import React from 'react';
function TestComponent({carDetails, updateCarDetails}){
    return (<>
        <h2>This is test component {carDetails.brand}</h2>
    </>)
}

export default React.memo(TestComponent);