import { useState, useEffect } from 'react'
import Unit4 from "./components/unit4/unit4"
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [section, setSection] = useState("selectSection")
  const [visibleUnit4, setVisibleUnit4] = useState(false)
  const [visibleUnit5, setVisibleUnit5] = useState(false)
  const [visibleUnit6, setVisibleUnit6] = useState(false)

  const handleOnChange = (e) => {
    setSection(e.target.value)
  }

  useEffect(() => {
    section === "Unit4" ? setVisibleUnit4(true) : setVisibleUnit4(false)
    section === "Unit5" ? setVisibleUnit5(true) : setVisibleUnit5(false)
    section === "Unit6" ? setVisibleUnit6(true) : setVisibleUnit6(false)
  }, [section]);

  
  return (
    <div className="App">
      <select name="Units" value={section} onChange={handleOnChange}>
                <option v>Select a section</option>
                <option value="Unit4">Unit 4 | MAN AND NATURE</option>
                <option value="Unit5">Unit 5 | BRIDGES, BORDERS AND BARRIERS</option>
                <option value="Unit6">Unit 6 | GLOBAL AND LOCAL</option>
      </select>
      {/* <h1>Esta seccion es {section}</h1> */}
      {visibleUnit4 && <Unit4></Unit4>}
      {visibleUnit5 && <p>ESTO DEBE SER EL NUMERO 5</p>}
      {visibleUnit6 && <p>ESTO DEBE SER EL NUMERO 6</p>}
    </div>
  )
}

export default App
