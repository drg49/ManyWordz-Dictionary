import { useState } from "react"

const Form = (props) => {

    const handleChange = (event) => {
        let word = event.target.value
        console.log(word)
        if (word.length >= 2) {
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