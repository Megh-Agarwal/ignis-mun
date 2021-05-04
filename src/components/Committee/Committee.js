import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import img from '../../images/who-emblem.png';
import pdfIcon from '../../images/pdfIcon.png';
import pdfSvg from '../../images/pdf.svg';
import './Committee.css';

import Spinner from './Spinner'

const Committee = () => {
  const { name } = useParams();
  const [data, setData] = useState(null);
  const [comName, setComName] = useState(name);

  if (name !== comName) {
    window.location.reload();
  }

  const getComData = () => {
    axios.get('http://13.232.18.191/committees/' + name)
      .then(res => {
        console.log(res.data);
        console.log(res.data.committees)
        console.log(res.data.committees[0])
        setData(res.data.committees[0])}
      )
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getComData()
  }, [])


  if(data == null){
    return <Spinner/>
  }

  else if (data !== {}) {
    return (
      <div>
        <div className="committee-container">
          <div className="text">
            <b>
              <h1 className="head font-serif">{data.fullForm}({data.committee})</h1>
            </b>

            <br/>
  
            <Description description={data.description} chars={400} style={{backgroundColor:'black'}} /><br/>
  
            <p style={{fontSize:'14pt'}} className="font-serif">
              <u>Agenda</u> - <span className="font-serif text-base md:text-lg text-gray-800">{ data.agenda }</span>
            </p>
            
            <br/>

            <h4 style={{ fontSize: '14pt' }} className="font-serif" ><u>Agenda description</u></h4>

            <p className="font-serif text-base md:text-lg text-gray-800">
              {data.agendaWriteup}
            </p>

            <div className="resources font-serif">
              <h4 style={{ fontSize: '14pt' }} className="font-serif" ><u>Downloads</u></h4>
              
              <div className="com-btn-grp text-gray-800">
                {/* <button className="mx-2 my-2 com-btn">
                  <img width="40px" className="py-2" src={pdfSvg}/>
                  <span>Study guide</span>
                </button>
  
                <button className="mx-2 my-2 com-btn">
                  <img width="40px" className="py-2" src={pdfSvg}/>
                  <span>Committee Brief</span>
                </button> */} Coming soon...
              </div>
  
            </div>
          </div>
  
          <div className="committee-logo">
            <img width="300px" src={data.logo}/>
          </div>
        </div>
        <div>
          <h4 style={{ fontSize: '18pt' }} className="font-serif text-center" >The Executive Board</h4>

          <div className="main">

            {console.log(data)}
            {
              data.main.map((main, i) => <Chair key={i} main={main} />)
            }
          </div>
        </div>
      </div>
    );
  } else {
    return 'Loading'
  }
}

const Chair = ({main}) => {
  return (
    <div className="chair">
      <div className="flex justify-center image-container">
        <img src={main.image} />
      </div>
      <h4 
        style={{
          fontFamily:'Merriweather, serif', 
          fontSize:'16pt', 
          textDecoration:'underline',
          textAlign:'center'
        }}
      >
        {main.position}
      </h4>
      <h4 className="font-serif text-base md:text-lg text-center">{main.name}</h4>
      <p className="font-serif text-base md:text-lg text-gray-800">
        <Description description={main.description} chars={200}/>
      </p>
    </div>
  )
}

const Description = ({description, chars}) => {
  const [isShown, setIsShown] = useState(false);

  function reduce(desc) {
    const descArr = desc.substr(0, chars).split(' ');
    descArr.pop();
    return descArr.join(' ') + '... ';
  }

  return (
    <p className="font-serif text-base md:text-lg text-gray-800">
      {
        isShown ? description : reduce(description)
      }
      <button className="text-blue-700 font-serif focus:outline-none hover:underline" onClick={() => setIsShown(!isShown)}>{isShown ? "Hide" : "Show"}</button>
    </p>
  )
}


export default Committee;
