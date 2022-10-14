import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Services.css'


const Services = () => {
    const[posts, setPosts] = useState([]);
    
    useEffect(() => {
        axios.get("https://api2.binance.com/api/v3/ticker/24hr")  //'https://jsonplaceholder.typicode.com/posts'
            .then((res) => {
                
                res.data = res.data.slice(0,10);
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
                
            })
    }, [])

    return (
        <>
    {/* <div>Services
        <ul>
            { posts.map(post => <li>{'Symbol : '+ post.symbol +' High : Price'+post.highPrice}</li>)}
        </ul>
    </div> */}
     <Carousel fade>
        {   
            posts.map(post => 
                <Carousel.Item>
                    <img
                            className="crypto-img d-block w-100"
                            src={require('./Images/crypto-background.jpg')}

                    />   
                    <Carousel.Caption className='info-text'>
                        <h3>{post.symbol}</h3>
                        {/* <p>{post.highPrice}</p> */}
                        <ListGroup>
                            <ListGroup.Item className='list_element' >High Price : {post.highPrice}</ListGroup.Item>
                            <ListGroup.Item className='list_element'>Low Price : {post.lowPrice}</ListGroup.Item>
                            <ListGroup.Item className='list_element'>Last Price : {post.lastPrice}</ListGroup.Item>
                            <ListGroup.Item className='list_element'>Volume : {post.volume}</ListGroup.Item>
                        </ListGroup>
                    </Carousel.Caption> 
            
                </Carousel.Item>
            )
        }
        {/* {
            posts.map(post => {
                <Carousel.Item>
                    <img
                        className="crypto-img d-block w-100"
                        src={require('./Images/crypto-background.jpg')}
                        
                    />
                    <Carousel.Caption className='info-text'>
                        <h3>{post.symbol}</h3>
                        <p>{post.highPrice}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            })    
        } */}
   </Carousel>
 </>
  )
}

export default Services

/* <Carousel.Item>
       <img
         className="crypto-img d-block w-100"
         src={require('./Images/crypto-background.jpg')}
         alt="First slide"
       />
       <Carousel.Caption className='info-text'>
         <h3>First slide label</h3>
         <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="crypto-img d-block w-100"
         src={require('./Images/crypto-background.jpg')}
         alt="Second slide"
       />

       <Carousel.Caption className='info-text'>
         <h3>Second slide label</h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="crypto-img d-block w-100"
         src={require('./Images/crypto-background.jpg')}
         alt="Third slide"
       />

       <Carousel.Caption className='info-text'>
         <h3>Third slide label</h3>
         <p>
           Praesent commodo cursus magna, vel scelerisque nisl consectetur.
         </p>
       </Carousel.Caption>
     </Carousel.Item> */