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
    Country: ({ props.delegateData.country })
    </p>
  </div>

  return (
    <div class="card p-5">
      <img width="150px" src={props.comData.logo} />
      <div class="content">
        <h4 className="mb-2">
          Committee: {fullForm}
        </h4>
        { props.comData.committee === "AIPPM" ? aippm : other}
        <br></br>
        <button class="font-serif btn bg-gradient-to-r from-yellow-500 to-red-600">
          <Link to={`/committee/${props.comData.committee}`}>Read More <i className="fas fa-chevron-right"></i> </Link>
        </button>
      </div>
    </div>
  );
}

export default Card
