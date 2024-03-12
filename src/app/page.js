"use client"
import "./globals.css";
import styles from "./page.module.css";
import {useState} from "react";
import Modal from "@/components/Modal";
import SubForm from "@/components/SubForm";

function Home() {
    const [numForms, setNumForms] = useState(1)
    const [subFormValues, setSubFormValues] = useState([])
    const [isOpen, setIsOpen] = useState(false);

    const handleAddForm = () => {
        setNumForms(numForms + 1)
    }
    const handleSubFormChange = (index, value) => {
        let updatedSubFormValues = [...subFormValues];
        updatedSubFormValues[index] = value;
        setSubFormValues(updatedSubFormValues)
    }
    const handleSubmit = () => {

    }

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <main className={styles['container']}>
            <h1>Input Car Details (total: {numForms})</h1>
            <div className={styles['form-container']}>
                <button onClick={handleAddForm} className={styles['btn-add']}>Add form</button>

                <div className={styles['sub-forms-container']}>
                    {Array.from({length: numForms}, (_, index) => (
                        <SubForm key={index} index={index} onChange={handleSubFormChange}></SubForm>
                    ))}

                </div>
                <button className={styles['btn-submit']} onClick={openModal}>Submit</button>

            </div>

            <Modal isOpen={isOpen} onClose={closeModal} subFormValues={subFormValues}></Modal>
        </main>
    );
}

export default Home;