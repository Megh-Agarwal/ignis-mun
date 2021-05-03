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
  
            <Description description={data.description} /><br/>
  
            <p style={{fontSize:'14pt'}} className="font-serif">
              <u>Agenda</u> - <span className="font-serif text-base md:text-lg text-gray-700">{ data.agenda }</span>
            </p>
  
            <div className="resources font-serif">
              <h4 style={{ fontSize: '14pt' }} className="font-serif" ><u>Downloads</u></h4>
              
              <div className="com-btn-grp text-gray-700">
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
            
            <br/>
  
            <h4 style={{ fontSize: '14pt' }} className="font-serif" ><u>The Executive Board</u></h4>
            <div className="main">
              {console.log(data)}
              {
                data.main.map((main, i) => <Chair key={i} main={main} />)
              }
            </div>
          </div>
  
          <div className="committee-logo">
            <img width="300px" src={img}/>
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
      <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" />
      <h4 style={{fontFamily:'Merriweather, serif', fontSize:'14pt', textDecoration:'underline'}}>{main.position}</h4>
      <h4 className="inline-block font-serif text-base md:text-lg">{main.name}</h4>
    </div>
  )
}

const Description = ({description}) => {
  const [isShown, setIsShown] = useState(false);

  function reduce(desc) {
    const descArr = desc.substr(0, 500).split(' ');
    descArr.pop();
    return descArr.join(' ') + '... ';
  }

  return (
    <p className="font-serif text-base md:text-lg text-gray-700">
      {
        isShown ? description : reduce(description)
      }
      <button className="text-blue-700 font-serif focus:outline-none hover:underline" onClick={() => setIsShown(!isShown)}>{isShown ? "Hide" : "Show"}</button>
    </p>
  )
}


export default Committee;
