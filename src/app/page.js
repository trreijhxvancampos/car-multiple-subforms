"use client"
import "./globals.css";
import styles from "./page.module.css";
import {useCallback, useState} from "react";
import CarForm from "@/components/CarForm"
import PartForm from "@/components/PartForm";
import Modal from "@/components/Modal";

function Home() {
    console.log('_____________')
    console.log('Home rendered')

    const [modalOpen, setModalOpen] = useState(false);
    const [carDetails, setCarDetails] = useState({
        brand: "",
        make: "",
        model: "",
        year: "",
    })
    const [partsDetail, setPartsDetail] = useState([])

    const updateCarDetails = useCallback((details) => {
        setCarDetails(details)
    }, [])

    const updatePartsDetail = useCallback((index, details) => {
        setPartsDetail(prevPartsDetail => {
            const newPartsDetail = [...prevPartsDetail];
            newPartsDetail[index] = details;
            return newPartsDetail;
        });
    }, []);

    const addPart = useCallback(() => {
        setPartsDetail(prevPartsDetail => [...partsDetail, {
                label: "",
                type: "",
                brand: "",
                model: "",
            }]
        )
    }, [partsDetail])
    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <main className={styles['container']}>
            <CarForm
                carDetails={carDetails}
                updateCarDetails={updateCarDetails}>
            </CarForm>
            <PartForm
                partsDetail={partsDetail}
                updatePartsDetail={updatePartsDetail}
                addPart={addPart}>
            </PartForm>
            <button className={styles['btn-submit']} onClick={toggleModal}>Submit</button>

            {modalOpen &&
                <Modal
                    carDetails={carDetails}
                    partsDetail={partsDetail}
                    closeModal={toggleModal}>
                </Modal>
            }
        </main>
    );
}

export default Home;