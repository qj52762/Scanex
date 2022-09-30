import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from  'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

function Home() {
    return (
        <>

        <Row className='row'> 
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./Images/Login-background.jpg')} />
                <Card.Body>
                    <Card.Title>Interior Matters</Card.Title>
                    <Card.Text>
                        Every little inch of your space gives a different impression.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./Images/Cameraman.jpg')} />
                <Card.Body>
                    <Card.Title>Cameraman</Card.Title>
                    <Card.Text>
                          When you make a photo catch every possible detail.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./Images/DeskItems.jpg')} />
                <Card.Body>
                    <Card.Title>Dedication</Card.Title>
                    <Card.Text>
                        Our team is dedicated to make your place look amazing!
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </Row>
        <Carousel>
 <Carousel.Item>
   <img width='1600px' height='800px'
     className="Project1"
     src={require('./Images/Project1.jpg')}
     alt="First slide"
   />
   <Carousel.Caption>
     <h3>Living room</h3>
     <p>One of our many projects with a focus on the living room</p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
 <img width='1600px' height='800px'
     className="Project2"
     src={require('./Images/Project2.jpg')}
     alt="Second slide"
   />

   <Carousel.Caption>
     <h3>Stairway to Heaven</h3>
     <p>The design of the stairway done by our team.
     </p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
 <img width='1600px' height='800px'
     className="Project3"
     src={require('./Images/Project3.jpg')}
     alt="Third slide"
   />

   <Carousel.Caption>
     <h3>Open Spaces</h3>
     <p>
       Most of our clients ask for additional focus on the open spaces.
     </p>
   </Carousel.Caption>
 </Carousel.Item>
</Carousel>
</>

    );
}

export default Home