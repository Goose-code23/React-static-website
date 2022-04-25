import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="nav">
                <li className="home"><a href="#home">Home</a></li>
                <li className="projects"><a href="#Projects">Projects</a></li>
                <li className="about"><a href="about_me">About Me</a></li>
                <li className="contact"><a href="contact">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar