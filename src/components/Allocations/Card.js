import { Link } from 'react-router-dom'

import './Allocations.css'

const Card = (props) => {
  const fullForm = props.comData.fullForm.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
  
  var aippm = <div>
      <p>
        Delegation: ({ props.delegateData.delegation }) 
        Party Name: ({ props.delegateData.pname })
      </p>
  </div>

  var other = <div>
    <p>
      <h4>Country</h4> { props.delegateData.country }
    </p>
  </div>

  return (
    <div class="card p-5">
      <div className="card-content">
        <img src={props.comData.logo} />
        <div class="content inline-flex flex-col justify-between">
          <div>
            <h3 className="mb-2">
              <h4>Committee</h4> {fullForm}
            </h3>
            { props.comData.committee === "AIPPM" ? aippm : other}
          </div>
          <Link to={`/committee/${props.comData.committee}`}>
            <button class="font-serif w-full btn bg-gradient-to-r from-yellow-500 to-red-600">
              Read More <i className="fas fa-chevron-right"></i> 
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card
