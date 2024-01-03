import { gql, useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQuery";

const Client = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) return <p>lOaDiNg... </p>;
  if (error) return <p>something went wrong... </p>;

  return (
    <>
      {!loading && !error && (
        <table className='table mt-3'>
          <thead>
            <tr>
              <th>Name</th>
              <th>email</th>
              <th>phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Client;
