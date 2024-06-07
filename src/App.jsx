import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Homepage } from "./pages/Homepage"
import { Aboutpage } from "./pages/Aboutpage"

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/about" element={<Aboutpage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
