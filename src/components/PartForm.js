import React from 'react';
import styles from "../app/page.module.css";
import PartSubForm from "@/components/PartSubForm";

function PartForm({partsDetail, updatePartsDetail, addPart}) {
    console.log('PartForm rendered')
    return (
        <>
            <h1>Parts (total: {partsDetail.length})</h1>
            <div className={styles['form-container']}>
                <button onClick={addPart} className={styles['btn-add']}>Add part</button>
                <div className={styles['sub-forms-container']}>

                    {partsDetail.map((part, index) => (
                        <PartSubForm
                            key={index}
                            index={index}
                            details={part}
                            updatePartsDetail={updatePartsDetail}>
                        </PartSubForm>
                    ))}
                </div>
            </div>
        </>

    )
}

export default React.memo(PartForm);
