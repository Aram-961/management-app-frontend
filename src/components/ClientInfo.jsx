import { HiOutlineEnvelope } from "react-icons/hi2";
import { FaRegIdBadge } from "react-icons/fa";
import { CiPhone } from "react-icons/ci";

const ClientInfo = ({ client }) => {
  console.log("ClientInfo:", client.name);

  return (
    <>
      <h5 className='mt-5'>Client Information</h5>
      <ul className='list-group'>
        <li className='list-group-item'>
          <FaRegIdBadge className='icon' />
          {client.name}
        </li>
        <li className='list-group-item'>
          <HiOutlineEnvelope className='icon' />
          {client.email}
        </li>
        <li className='list-group-item'>
          <CiPhone className='icon' />
          {client.phone}
        </li>
      </ul>
    </>
  );
};

export default ClientInfo;
