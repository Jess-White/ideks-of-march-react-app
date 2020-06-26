import React from 'react'
import {Jumbotron} from 'react-bootstrap'
import {Container} from 'react-bootstrap'


function Footer() {
  return (
    <div>
      <footer>
        <Jumbotron style={{backgroundColor: "#032f0c", color: "#01322c", bottom: 0,}}>
          <Container>
          <div className="text-center">
            <div className="glow">
              <h1 style={{fontSize: "500%", fontWeight: "bold", letterSpacing: "5px", 
              color: "#61ff98", fontFamily: "Impact"}} >Thanks for stopping by!</h1>
            </div>
            <div>
              <img className="shadow glow" style={{ margin: 30, borderRadius: "50%", width: "500px", height: "500px" }}
                    src="https://www.sadanduseless.com/wp-content/uploads/2020/03/funny-salad1.jpg" alt="" />
            </div>
            <div className="glow">
              <h1 style={{fontSize: "200%", fontWeight: "bold", letterSpacing: "5px", 
              color: "#61ff98", fontFamily: "Impact"}} >I found a lot of really great stock images of women laughing manaically whilst eating salad. Check out this one! Can you think of a recipe that involves leeks, asparagus, AND Italian lettuce? I sure can't!</h1>
            </div>
          </div>

          </Container>
        </Jumbotron>
      </footer>
    </div>
    );
}

export default Footer;