import React, { useContext, useState } from "react"
import { thingsContext } from "./thingsContext"

function List(props) {
    const {deleteThing, editThing } = useContext(thingsContext)
    const [edit, setEdit] = useState(true)
    const [listItem, setListItem] = useState({
        title: props.title,
        imgUrl: props.imgUrl,
        description: props.description
    })

    function handleDelete() {
        deleteThing(props._id)
    }

    function handleEdit(e) {
        e.preventDefault()
        setEdit(!edit)
        editThing(listItem, props._id)
    }
    function handleChange(e) {
        const { name, value } = e.target
        setListItem(prevText => {
            return {
                ...prevText, [name]: value
            }
        })
    }


    return (
        <>
            <div className="listContainer">
                {edit ? <div className="listItem">
                    <h1>{props.title}</h1>
                    <img id="image" src={props.imgUrl} />
                    <h4>{props.description}</h4>
                    <button className="deleteButton" onClick={handleDelete}>Delete</button>
                    <button className="editButton" onClick={() => setEdit(prev => !prev)}>Edit</button>
                </div>
                    :
                    <form className="editInputs" onSubmit={handleEdit}>
                        <input
                            className="editTitle"
                            type="text"
                            placeholder="Title"
                            name="title"
                            value={listItem.title}
                            onChange={handleChange}
                        ></input>

                        <input
                            className="editImg"
                            type="text"
                            placeholder="Image URL"
                            name="imgUrl"
                            value={listItem.imgUrl}
                            onChange={handleChange}
                        ></input>

                        <textarea
                            className="editDescription"
                            placeholder="Description"
                            name="description"
                            value={listItem.description}
                            onChange={handleChange}
                        ></textarea>

                        <button className="saveButton">Save</button>
                    </form>
                }
            </div>
        </>
    )


}

export default List
