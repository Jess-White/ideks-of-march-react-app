import React from 'react'
import {Container} from 'react-bootstrap'
import {Card} from 'react-bootstrap'

function About() {
  return (
    <header>
    <Card style={{backgroundColor: "#011916", color: "#01322c"}}>
      <Container>
      <div>
        <img className="shadow filtered glow bottom" style={{ margin: 30, marginTop: 80, borderRadius: "50%", width: "500px", height: "500px" }}
                src="https://images.8tracks.com/cover/i/002/400/469/Untitled-1_copy-7903.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max" alt="" />
      </div>
        <div className="text-center">
          <h1 style={{fontSize: "500%", fontWeight: "bold", marginBottom: 80, letterSpacing: "10px", color: "#c8ff61", fontFamily: "Impact"}}>
            What is a Caesar Cipher?
          </h1>
        </div>
        <div className="text-left">
          <h1 style={{fontSize: "200%", letterSpacing: "5px", fontWeight: "bold", marginTop: 50, marginBottom: 50, color: "#aeffca", fontFamily: "Impact"}}>
            Also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, a Caesar Cipher is one of the simplest and most widely known encryption techniques. The method is named after Julius Caesar, who used it in his private correspondence.
          </h1>
          </div>
          <div className="text-left">
            <h1 style={{fontSize: "200%", letterSpacing: "5px", fontWeight: "bold", marginTop: 50, marginBottom: 50, color: "#aeffca", fontFamily: "Impact"}}>
            It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. 
            </h1>
          </div>
          <div className="text-left">
            <h1 style={{fontSize: "200%", letterSpacing: "5px", fontWeight: "bold", marginTop: 50, marginBottom: 50, color: "#aeffca", fontFamily: "Impact"}}>
            For example, this is an alphabet shifted forward 23 characters, so that A becomes X, B becomes Y, and so on:
          </h1>
          </div>
          <div className="text-left">
            <h1 style={{fontSize: "200%", letterSpacing: "5px", fontWeight: "bold", marginTop: 50, marginBottom: 50, color: "#c8ff61", fontFamily: "Courier"}}>
            Plain:    ABCDEFGHIJKLMNOPQRSTUVWXYZ
            Cipher:   XYZABCDEFGHIJKLMNOPQRSTUVW
          </h1>
          </div>
          <div className="text-left">
            <h1 style={{fontSize: "200%", letterSpacing: "5px", fontWeight: "bold", marginTop: 50, marginBottom: 50, color: "#aeffca", fontFamily: "Impact"}}>
              This application provides a demo - enter some text and the number of letters you want to shift the text forward, and an encoded version will appear on the screen. Enjoy!
          </h1>
        </div>
      </Container>
    </Card>
  </header>
  )}

export default About;