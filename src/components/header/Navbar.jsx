
import './navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';




export default function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    

    //responsive navbar with inline css
    <div>
      <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <Link  to="/" className="nav-logo">
Logo          </Link>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={()=>Close()}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/profile" className="nav-links" onClick={()=>Close()}>
                profile
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-links" onClick={()=>Close()}>
                Login
              </Link>
            </li>
          </ul> 
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>

    </div>


  );
}
function App() {
  
  return (
    <>
     
       <BrowserRouter>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}