import { useState } from "react"

const Form = (props) => {

    const handleChange = (event) => {
        let word = event.target.value
        if (word.length >= 3) {
        props.getDef(word)
        } else {
            props.setResults(null)
        }
    }



    return (
        <div>
            <input type="text" onChange={handleChange}/>
        </div>
    )
}

export default Form