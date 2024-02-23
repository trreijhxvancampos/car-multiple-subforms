"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Modal from "@/components/Modal";
import {useState} from "react";
import Form from "@/components/Form";

function Home() {
    const [numForms, setNumForms] = useState(1)
    const addForm = () => {
        setNumForms(numForms + 1)
    }

    return (
        <main>
            <h1>Hello</h1>
            <button onClick={addForm}>Add form</button>
            <Form numForms={numForms}></Form>
        </main>
    );
}

export default Home;