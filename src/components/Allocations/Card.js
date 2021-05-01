import { Link } from 'react-router-dom'

import img from '../../images/who-emblem.png';
import './Allocations.css'

const Card = ({ comData }) => {
  const fullForm = comData.fullForm.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  return (
    <div class="card">
      <img width="100px" src={img} />
      <div class="content">
        <h4 className="md:text-lg">
          {fullForm} ({ comData.committee })
        </h4> 
        <br/>

        <button class="font-serif btn">
          <Link to={`/committee/${comData.committee}`}>Read More <i className="fas fa-chevron-right"></i> </Link>
        </button>
      </div>
    </div>
  );
}

export default Card
