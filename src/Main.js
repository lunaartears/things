


import React, { useContext } from "react"
import axios from "axios"
import { thingsContext } from "./thingsContext"

function Main(props) {

    //const context = React.useContext(thingsContext)
    const { uglyThing, handleChange, handleSubmit } = useContext(thingsContext)

    const submit = (e) => {
        e.preventDefault()
        handleSubmit()
        uglyThing.title = ""
        uglyThing.imgUrl = ""
        uglyThing.description = ""
    }

    return (
        <main className="main-input-container">
            <input
                className="input-title"
                type="text"
                placeholder="Title"
                name="title"
                value={uglyThing.title}
                onChange={handleChange}
            ></input>

            <input
                className="input-img"
                type="text"
                placeholder="Image URL"
                name="imgUrl"
                value={uglyThing.imgUrl}
                onChange={handleChange}
            ></input>

            <textarea
                className="input-description"
                placeholder="Description"
                name="description"
                value={uglyThing.description}
                onChange={handleChange}
            ></textarea>

            <button
                className="submit-button"
                type="submit"
                name="submit"
                onClick={submit}
            >Submit</button>
        </main>
    )
}

export default Main
