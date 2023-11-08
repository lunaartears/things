import React from "react"
import './App.css';
import Header from "./Header"
import Main from "./Main"
import List from "./List"
import {thingsContext } from "./thingsContext"
// 1. add something in postman
// 2. make List comp show up
// 3. add your post req to the submit button
// 4. add delete functionality
// 5. make an edit function

function App() {
  const { thingsList, setThingsList, handleSubmit, uglyThing } = React.useContext(thingsContext)

  const mapMe = thingsList.map((item, i) => {

    return (
      <List key={i}
          imgUrl={item.imgUrl}
          description={item.description}
          title={item.title}
          _id={item._id}
          />

    )

})

  return (
    <div>
        <Header />
        <Main />
        {mapMe}
    </div>
  )
}

export default App;
