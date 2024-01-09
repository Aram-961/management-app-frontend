import React from "react";
import { CiTrash } from "react-icons/ci";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutation.js";
import { GET_CLIENTS } from "../queries/clientQuery.js";
import { GET_PROJECTS } from "../queries/projectQuery.js";

const ClientRow = ({ client }) => {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    // On Delete: Refetch client from database
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],

    // updating the cache on deleteClient
    // update: (cache, { data: { deleteClient } }) => {
    //   const { clients } = cache.readQuery(
    //     { query: GET_CLIENTS },
    //     { query: GET_PROJECTS }
    //   );
    //   cache.writeQuery({
    //     query: GET_CLIENTS,
    //     data: { clients: clients.filter((c) => c.id !== deleteClient.id) },
    //   });
    // },
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.email}</td>
      <td>{client.phone}</td>
      <td>
        <button className='btn btn-alert' onClick={deleteClient}>
          <CiTrash />
        </button>
      </td>
    </tr>
  );
};

export default ClientRow;
