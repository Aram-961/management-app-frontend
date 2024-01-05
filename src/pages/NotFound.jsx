import { BsExclamationCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <BsExclamationCircle className='text-danger' size='5em' />
      <h1>404</h1>
      <p className='lead'>Oops, this page does not exists 🤭</p>
      <Link to='/' className='btn btn-primary'>
        Go Back to 🏠
      </Link>
    </div>
  );
};

export default NotFound;
