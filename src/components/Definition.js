import { useEffect } from "react"
import { useHistory } from "react-router-dom"

const Definition = (props) => {

    const history = useHistory()
    
    const loaded = () => {
        if (props.def.title){
            return (
                <section>
                    <h1>{props.def.title}!</h1>
                    <h3>{props.def.message}</h3>
                    <h3>{props.def.resolution}</h3>
                </section>
            )
        } else {
            return (
                <section>{props.def[0].word}</section>
            )
        }
    }

    const loading = () => {
        return <h1>Loading...</h1>
    }
    

    return props.def ? loaded() : loading()
    
}

export default Definition