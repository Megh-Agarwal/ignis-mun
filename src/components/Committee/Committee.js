import { useParams } from 'react-router-dom';

import img from '../../images/who-emblem.png';
import pdfIcon from '../../images/pdfIcon.png';
import './Committee.css';

const Committee = () => {
  const { name } = useParams();
  console.log(name)

  return (
    <>
      <div className="committee-container">
        <div className="text">
          <b>
            <h1 className="head" >{ name.toUpperCase() } - Overview</h1>
          </b>
          <br/>
          <p className="font-serif text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh praesent tristique magna sit. Enim ut sem viverra aliquet. Maecenas accumsan lacus vel facilisis volutpat est velit egestas dui. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Quis viverra nibh cras pulvinar mattis nunc sed blandit. Convallis posuere morbi leo urna. Cras tincidunt lobortis feugiat vivamus at augue eget arcu. Ipsum suspendisse ultrices gravida dictum fusce ut. Morbi enim nunc faucibus a pellentesque sit amet porttitor. Posuere morbi leo urna molestie at elementum eu facilisis. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.</p>
          <div className="resources">
            <h4 style={{ fontFamily: 'Merriweather, serif', fontSize: '14pt' }} ><u>Downloads</u></h4>
            <div className="com-btn-grp">
              <button style={{ marginRight: "10px" }} className="com-btn">
                <img width="40" src={pdfIcon} />
                <span>Study guide</span>
              </button>
              <button style={{ marginLeft: "10px" }} className="com-btn">
                <img width="40" src={pdfIcon} />
                <span>Committee Brief</span>
              </button>
            </div>
          </div>
        </div>
        <div className="committee-logo">
          <img width="300px" src={img}/>
        </div>
      </div>
    </>
  );
}

export default Committee;
