import React from 'react';
import {Container} from 'react-bootstrap';
import {Card} from 'react-bootstrap';
import { InputGroup, Input, FormGroup, Form, FormControl, Button} from 'react-bootstrap';


class Cipher extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
      shift: '',
      cipher: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target, this.state);
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('You have submitted this text :' + this.state.text);
    event.preventDefault();
    fetch(`http://localhost:3000/cipher?text=${this.state.text}&shift=${this.state.shift}`)
      .then(res => {
        console.log(res);
          if (res.ok) {
            return res.json()
          } else {
            return Promise.reject(res.statusText)
          }
        })
      .then(res => {
        this.setState({
          cipher: res, 
          text: '',
          shift: ''
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    return (
      <header>
      <Card style={{backgroundColor: "#011916", color: "#01322c"}}>
        <Container>
        <div>
          <img className="shadow filtered glow bottom" style={{ margin: 30, borderRadius: "50%", width: "500px", height: "500px" }}
                  src="https://sadanduseless.b-cdn.net/wp-content/uploads/2020/03/funny-salad6.jpg" alt="" />
        </div>
          <div className="text-center">
            <h1 style={{fontSize: "500%", fontWeight: "bold", marginBottom: 50, letterSpacing: "10px", color: "#c8ff61", fontFamily: "Impact"}}>
              Give it a try!
            </h1>
          </div>
          <div className="text-left">
            <h1 style={{fontSize: "200%", letterSpacing: "5px", fontWeight: "bold", marginTop: 50, marginBottom: 90, color: "#aeffca", fontFamily: "Impact"}}>
              Enter the text you want to encode and the number of characters you want to shift:
            </h1>
            </div>

          <div>
            <form onSubmit={this.handleSubmit}>
              <input size="lg" className="inputText"
                type="text"
                name="text"
                placeholder="Text to Encode"
                value={this.state.text}
                onChange={this.handleChange}
              />
              <input className="inputShift"
                type="text"
                name="shift"
                placeholder="Shift Number"
                value={this.state.shift}
                onChange={this.handleChange}
              />          
              <input className="inputButton" type="submit" value="Submit"/>
              </form>
          </div>

          {
            this.state.cipher && (
              <div className="output-text">
                <h1 style={{fontSize: "400%", fontWeight: "bold", marginBottom: 50, letterSpacing: "10px", color: "#c8ff61", fontFamily: "Impact"}}
                >{this.state.cipher}</h1>
              </div>
            )
          }

        </Container>
      </Card>
    </header>
    )}

}

export default Cipher;

