
import React, { createContext, useEffect } from "react"
import axios from "axios"

const thingsContext = createContext()

function ContextProvider(props) {
    const [uglyThing, setUglyThing] = React.useState({
        title: "",
        imgUrl: "",
        description: ""
    })
    const [thingsList, setThingsList] = React.useState([])

    useEffect(() => {
        axios.get('https://api.vschool.io/sarahdawn/thing')
            .then(res => setThingsList(res.data))
    }, [])

    function handleChange(e) {
        const { name, value } = e.target
        setUglyThing(prevText => ({
            ...prevText,
            [name]: value
        }))
    }

    function handleSubmit() {
        axios.post('https://api.vschool.io/sarahdawn/thing', uglyThing)
            .then(res => {
                setThingsList(prev => [...prev, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteThing(_id) {
        axios.delete(`https://api.vschool.io/sarahdawn/thing/${_id}`)
            .then(res => console.log(res))
            .then(res => setThingsList(prevThings => prevThings.filter((thing, index) => index !== thing._id)))
            .catch(err => console.log(err))
    }

    function editThing(edits, _id) {
        axios.put(`https://api.vschool.io/sarahdawn/thing/${_id}`, edits)
            .then(res => setThingsList(prevThings => {
                return prevThings.map(thing => {
                    return thing._id === _id ? res.data : thing
                })
            }))
            .catch(err => console.log(err))
    }

    return (
        <thingsContext.Provider value={{                          // destructuring what I need from the ContextProvider function
            uglyThing, setUglyThing, thingsList, setThingsList,  // <= that is shorthand for {uglyThing: uglyThing,
            handleChange, handleSubmit, editThing, deleteThing                           // setUglything: setUglyThing} ect...
        }}>
            {props.children}
        </thingsContext.Provider>
    )
}

export { thingsContext, ContextProvider }
