import { useRef } from "react"

const Form = (props) => {

    const inputRef = useRef()

    const handleSubmit = () => {
        console.log(inputRef.current.value)
        props.getDef(inputRef.current.value)
        
    }



    return (
        <div>
            <input type="text" ref={inputRef}/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Form