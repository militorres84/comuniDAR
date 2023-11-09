import './app.css'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
