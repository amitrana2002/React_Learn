import './App.css'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'


function App() {

  return (
    <>
      <BrowserRouter>
          <nav className='flex'>
              <div id="nav-brand">
                    <h3>ReactJs Developer</h3>
              </div>

              <div id="nav-options">
                  <span>
                    <Link to="/">Home</Link>
                  </span>
                  <span>
                    <Link to="/Contact">Contact</Link>
                  </span>
                  <span>
                    <Link to="/Projects">Projects</Link>
                  </span>
              </div>
          </nav>

          <div className='flex header'>
              <div className='userinfo'>
                    <h1>Amit Kumar</h1>
                      <p>Hi Visitor ! I am a computer science student who is interested in learning reactJs and Enjoy working on frontend projects</p>
              </div>
              <div className='userpic'>
                <img src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"  alt ="not " className="img-responsive img-circle"/>
              </div>
          </div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Projects' element={<Projects/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='*' element={<h1>404- Page Not found!</h1>}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
