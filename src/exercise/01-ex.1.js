// useState: greeting
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'



function Greeting({initialname = ''}) {
  // 💣 delete this variable declaration and replace it with a React.useState call
  const [name, setName] = React.useState (initialname)

  function handleChange(event) {
    // 🐨 update the name here based on event.target.value
    console.log(event.target.value)
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" placeholder={initialname} />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Go ahead and say something funny'}
    </div>
  )
}

function App() {
  return <Greeting 
    initialname='Please write between A-Z '
  />
  
}

export default App
