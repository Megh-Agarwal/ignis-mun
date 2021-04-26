import { Link } from 'react-router-dom'

import img from '../../images/who-emblem.png';
import './Allocations.css'

const Card = ({ comData }) => {
  return (
    <div class="card">
      <img width="100px" src={img} />
      <div class="content">
        <h4 className="md:text-lg">
          {comData.committee} ({ comData.abbreviation })
        </h4> 
        <br/>

        <button class="font-serif btn">
          <Link to={`/committee/${comData.abbreviation}`}>Read More <i className="fas fa-chevron-right"></i> </Link>
        </button>
      </div>
    </div>
  );
}

export default Card
