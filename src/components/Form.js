import React, {useState} from 'react';
import SubForm from "@/components/SubForm";
import Modal from "@/components/Modal";

function Form(props) {
    const [subFormValues, setSubFormValues] = useState([])

    function handleChange(index, value) {
        const updatedSubFormValues = [...subFormValues];
        updatedSubFormValues[index] = value;
        setSubFormValues(updatedSubFormValues)
        // console.log("handle form done")
        // console.log(subFormValues)
    }

        function handleSubmit() {
            const nonEmptyRecords = subFormValues.filter(item => {
                return Object.values(item).every(value => value);

            })

        }

    return (
        <div>
            {
                Array.from({length: props.numForms}, (_, index) => (
                    <SubForm key={index} index={index} onChange={handleChange}></SubForm>
                ))}
            <button>Submit</button>
            <Modal subFormValues={subFormValues}></Modal>

        </div>

    );
}

export default Form;