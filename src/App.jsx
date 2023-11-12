import EmailContextProvider from "./context/EmailContextProvider"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./routes/Nav"
import Unread from "./routes/Unread"
import Favorites from "./routes/Favorites"
import Read from "./routes/Read"

function App() {

  
  return (
    <EmailContextProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Unread />}/>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/read" element={<Read />}/>
        </Routes>
      </BrowserRouter>
    </EmailContextProvider>    
  )
}

export default App
