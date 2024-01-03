import React from "react";
import { CiTrash } from "react-icons/ci";

const ClientRow = ({ client }) => {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-alert'>
          <CiTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
