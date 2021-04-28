import { Link } from 'react-router-dom';

const Alert = () => {
  return (
    <div className="md:w-full  inline-flex items-center justify-center">
      <div class="font-serif border border-l-4 border-t-0 border-red-400 border-r-0 border-b-0 rounded-b bg-red-100 px-4 py-3 text-red-700 md:w-100 mx-4 relative bottom-20" role="alert">
      <p class="font-bold">There was an error</p>
      <p>
        You haven't registered as yet <br/>
        If you have and haven't been allocated please contact us <Link to="/contact" className="font-bold">here</Link> 
      </p>
      </div>
    </div>
  );
}

export default Alert
