import { Link } from 'react-router-dom';

import './Allocations.css';

const Alert = ({ msg }) => {
  return (
    <div class="font-serif border border-l-4 border-t-0 border-red-400 border-r-0 border-b-0 rounded-b bg-red-100 px-4 py-3 text-red-700 alertBar" role="alert">
      <p class="font-bold">There was an error</p>
      <p>
        You haven't registered as yet <br/>
        If you have and haven't been allocated please contact us <Link to="/contact" className="font-bold">here</Link> 
      </p>
    </div>
  );
}

export default Alert
