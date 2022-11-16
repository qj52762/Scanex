import React from 'react'
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
                <Card.Img variant="top" src={require('./Images/bitcoin.jpg')} />
                <Card.Body>
                    <Card.Title>Bitcoin</Card.Title>
                    <Card.Text>
                    Bitcoin is a decentralized digital currency that can be transferred on the peer-to-peer bitcoin network.
                    </Card.Text>
                
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./Images/dogecoin.jpg')} />
                <Card.Body>
                    <Card.Title>Dogecoin</Card.Title>
                    <Card.Text>
                    Dogecoin is the accidental crypto movement that makes people smile!
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={require('./Images/etherum.jpg')} />
                <Card.Body>
                    <Card.Title>Ethereum</Card.Title>
                    <Card.Text>
                    Ethereum is a technology that's home to digital money, global payments, and applications.
                    </Card.Text>
                    
                </Card.Body>
            </Card>

        </Row>
        <Carousel>
 <Carousel.Item>
   <img width='1600px' height='800px'
     className="Project1"
     src={require('./Images/Avalanche.png')}
     alt="First slide"
   />
   <Carousel.Caption>
     <h3>Avalanche</h3>
     <p>Avalanche is the fastest smart contracts platform in the blockchain industry, as measured by time-to-finality. Avalanche is blazingly fast, low cost, and eco-friendly.</p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
 <img width='1600px' height='800px'
     className="Project2"
     src={require('./Images/Cardano.png')}
     alt="Second slide"
   />

   <Carousel.Caption>
     <h3>Cardano</h3>
     <p>Cardano is a proof-of-stake blockchain platform: the first to be founded on peer-reviewed research and developed through evidence-based methods.
     </p>
   </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
 <img width='1600px' height='800px'
     className="Project3"
     src={require('./Images/Eth-blockchain.jpg')}
     alt="Third slide"
   />

   <Carousel.Caption>
     <h3>Ethereum</h3>
     <p>
       Ethereum is a decentralized, open-source blockchain with smart contract functionality.
     </p>
   </Carousel.Caption>
 </Carousel.Item>
</Carousel>
</>

    );
}

export default Home