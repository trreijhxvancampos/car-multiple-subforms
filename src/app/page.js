"use client"
import "./globals.css";
import styles from "./page.module.css";
import {useState} from "react";
import Form from "@/components/Form";

function Home() {
    const [numForms, setNumForms] = useState(1)
    const addForm = () => {
        setNumForms(numForms + 1)
    }

    return (
        <main className={styles['container']}>
            <h1>Input Car Details</h1>
            <div>
                <button onClick={addForm} className={styles['btn-add']}>Add form</button>
            </div>
            <Form numForms={numForms}></Form>
        </main>
    );
}

export default Home;