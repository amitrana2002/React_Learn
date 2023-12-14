import { BrowserRouter,Routes,Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return (
    <BrowserRouter >
      <h2>This is static part i.e. Header</h2>
      <div style={{backgroundColor:'red',padding:'5px', margin:'4px',display:'flex', gap:'8px'}}>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contacts</Link>
      </div>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    {/* <h1>This is fixed Part</h1> */}
    </BrowserRouter>
  )
}

export default App
