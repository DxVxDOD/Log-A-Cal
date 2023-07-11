import { Route, Routes } from "react-router"
import Header from "./components/Header"
import HomePage from "./components/HomePage"


function App() {

  return (
    <div className="box-border h-screen bg-zinc-900 text-zinc-200" >
      <Header/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </div>
  )
}

export default App
