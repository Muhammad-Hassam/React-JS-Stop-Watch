import './App.css';
import React, {useState} from 'react'
import {Container,Col,Row, Button} from 'reactstrap'

let timer=null;

function App() {
   let [sec, setsec]=useState(0);
   let [min, setmin]=useState(0);
   let [hrs, sethrs]=useState(0);
  
  const start=()=>{
    min=0;
    sec=0;
    hrs=0;
    setmin(min);
    setsec(sec);
    sethrs(hrs);
      timer= setInterval(() => {
          if (sec===60){
              sec=0;
              min++;
              setsec(sec);
              setmin(min);
          }
          else if(min===60){
              min=0;
              hrs++;
              setmin(min);
              sethrs(hrs);
          }
          else if(hrs===24){
               hrs=0
               sethrs(hrs);
          }
          else{
          setsec(sec++)
          }
          
        }, 1000);
        
  }

const resume=()=>{
  timer= setInterval(() => {
    if (sec===60){
        sec=0;
        min++;
        setsec(sec);
        setmin(min);
    }
    else if(min===60){
        min=0;
        hrs++;
        setmin(min);
        sethrs(hrs);
    }
    else if(hrs===24){
         hrs=0
         sethrs(hrs);
    }
    else{
    setsec(sec++)
    }
    
  }, 1000);
  
  
}


  const stop=()=>{
    clearInterval(timer);
}

  
    return(
     <>
     <Container fluid='md text-center mt-5'>
       <Row>
         <Col><h1 className='main-heading'>Stop Watch</h1></Col>
      </Row>
      <Row className='mt-5'> 
        <Col></Col>
         <Col></Col>
      <Col className='mt-5 pr-4 pl-4 ml-5 time-block'>
      <p><span ><b>Hours</b></span><br/><span >{hrs}</span></p>
      </Col>
      <Col className='mt-5 ml-5 time-block'>
      <p><span ><b>Minutes</b></span><br/><span>{min}</span></p>
      </Col>
      <Col className='mt-5 ml-5 time-block'>
      <p><span><b>Seconds</b></span><br/><span>{sec}</span></p>
      </Col>
      <Col></Col>
      <Col></Col>
      </Row>
      <Row className="mt-5">
        <Col className="mt-5 ml-4">
     <Button color='primary' className="pl-5 pr-5 mr-3 ml-5" onClick={start}>Start</Button>
     <Button color='danger' className="pl-5 pr-5 mr-4" onClick={stop}>Stop</Button>
     <Button color='success' className="pl-5 pr-5 mr-3" onClick={resume}>Resume</Button>
       </Col>
     </Row>
     </Container>
     </>
    );

}

export default App;
