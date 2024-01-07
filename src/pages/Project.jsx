import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQuery";
import ClientInfo from "../components/ClientInfo";

const Project = () => {
  // destructuring
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <h1>Something went wrong...</h1>;
  return (
    <>
      {!loading && !error && (
        <div className='mx-auto w-75 card p-5'>
          <Link to='/' className='btn btn-light btn-sm w-25 d-inline ms-auto'>
            back
          </Link>

          <h1>{data.project.name}</h1>
          <p>{data.project.name}</p>
          <h5 className='mt-3'>Project Status:</h5>
          <p className='lead'>
            {data?.project.status === "completed"
              ? "Completed ✔️"
              : data.project.status}
          </p>

          <ClientInfo client={data.project.client} />
        </div>
      )}
    </>
  );
};

export default Project;
