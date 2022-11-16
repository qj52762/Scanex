
import Card from 'react-bootstrap/Card';
import React, {useState, useEffect} from 'react'
import Row from  'react-bootstrap/Row';
import axios from 'axios'
import './AboutUs.css';


const AboutUs = () => {
    const[users, setUsers] = useState([]);
    
    useEffect(() => {
        axios.get("https://randomuser.me/api/?results=8")  
            .then((res) => {
                console.log(res.data.results);
                setUsers(res.data.results);
            })
            .catch((err) => {
                console.log(err);
                
            })
    }, [])

  return (
    <div className='root-element'>
        <iframe className='video-element'  src="https://www.youtube.com/embed/rYQgy8QDEBI">
    </iframe>
    <Row className='cards-row'>
    {users.map(user => 
        <Card className='employee-cards' style={{ width: '18rem' }}>
        <Card.Img variant="top" src={user.picture.large}/>
        <Card.Body>
          <Card.Title>{user.name.first +" " + user.name.last} </Card.Title>
          <Card.Text>
             Hello my name is {user.name.first +" " + user.name.last}, I was born on {user.dob.date.substring(0,4)}. I am {user.dob.age} years old.
             I work for Scanex. I live in {user.location.city + ', ' + user.location.state}. My phone number is {user.phone} and my email addres {user.email}.
          </Card.Text>
          
        </Card.Body>
      </Card>)}
    </Row>
    </div>



    // <Card style={{ width: '18rem' }}>
    //   <Card.Img variant="top" src={require('./Images/Qendrim-Jashanica-1x1.jpg')}/>
    //   <Card.Body>
    //     <Card.Title>Qendrim Jashanica CEO</Card.Title>
    //     <Card.Text>
    //        He is one of the smartest man who ever lived in planet earth. 
    //        Widely considered a visionary and a genius, he oversaw the launch of such revolutionary products, most oth them are about crypto.
    //        A lot of people said that binance was his product and accidentaly Changpeng Zhao stole the idea from him.
    //     </Card.Text>
    //     <Button href='/biography' variant="primary">Read More</Button>
    //   </Card.Body>
    // </Card>
  )
}

export default AboutUs;
