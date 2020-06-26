import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'

function Header() {
  return (
    <header>
    <Jumbotron style={{backgroundColor: "#032f0c", color: "#01322c"}}>
      <Container>
        <div className="text-center glow-header">
          <h1 style={{fontSize: "700%", fontWeight: "bold", marginBottom: 50, letterSpacing: "10px", color: "#c8ff61", fontFamily: "Impact"}}>
            The Ideks of March
          </h1>
        </div>
        <div>
          <img className="shadow filtered glow bottom" style={{ margin: 30, borderRadius: "50%", width: "500px", height: "500px" }}
                  src="https://www.onceuponachef.com/images/2010/08/Homemade-Caesar-Salad-Dressing.jpg" alt="" />
        </div>
        <div className="text-center glow">
          <h1 style={{fontSize: "500%", letterSpacing: "5px", fontWeight: "bold", marginTop: 50, marginBottom: 90, color: "#61ff98", fontFamily: "Impact"}}>
            A Simple Caesar Cipher
          </h1>
        </div>
      </Container>
    </Jumbotron>
  </header>
  )}

export default Header;