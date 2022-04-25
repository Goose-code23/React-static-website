import React from 'react'

const Textbox = () => {
  return (
    <div className="section">
        <div className="project1">
            <h1 className="pro1-text">task tracker app</h1>
            <p className="discription">This app was created to helo the user keep track of thier task and mange them as they finish them</p>
            </div>
        <div className="project2">
            <h1 className="pro2-text">Stock comparison app</h1>
            <p className="discription2">This was part of my intership at JPMorgan where I helped builed an app that would continously compare stock to each other using react</p>
        </div>
        <div className="project3">
            <h1 className="pro3-text">VaxMan game</h1>
            <p className="description3"> This project was to create a pacman clone with would have some diffrences like troll face instead of pacman and we hunnt the ghost instead of them hunting us</p>
        </div>
        </div>
  )
}

export default Textbox