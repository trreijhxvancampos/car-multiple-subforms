import React, {useState} from 'react';
import SubForm from "@/components/SubForm";
import Modal from "@/components/Modal";
import styles from "../app/page.module.css";

function Form(props) {
    const [subFormValues, setSubFormValues] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    function handleChange(index, value) {
        const updatedSubFormValues = [...subFormValues];
        updatedSubFormValues[index] = value;
        setSubFormValues(updatedSubFormValues)
    }

    function handleSubmit() {
        // const nonEmptyRecords = subFormValues.filter(item => {
        //     return Object.values(item).every(value => value);
        //
        // })

    }

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles['form-container']}>
            {
                Array.from({length: props.numForms}, (_, index) => (
                    <SubForm key={index} index={index} onChange={handleChange}></SubForm>
                ))}
            <button className={styles['btn-submit']} onClick={openModal}>Submit</button>
            <Modal isOpen={isOpen} onClose={closeModal} subFormValues={subFormValues}></Modal>

        </div>

    );
}

export default Form;