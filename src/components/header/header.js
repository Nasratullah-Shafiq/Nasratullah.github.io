import './header.css'

function Header(){
    return(
       
        <header>
          <div className="navbar-container">
            <div className="container d-flex justify-content-between align-items-center">
              <h2 className="logo">Portfolio</h2>
              <nav className="navbar">
                <ul className="d-flex">
                  <li><a className="nav-link" href="#hero">Home</a></li>
                  <li><a className="nav-link" href="#about">About</a></li>
                  <li><a className="nav-link" href="#services">Services</a></li>
                  <li><a className="nav-link" href="#blog">Blog</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <h1 className="hero-title">I am Nasratullah Shafiq</h1>
          <p className="hero-desc">Hello, world!</p>
        </header>
    
    )
}

export default Header