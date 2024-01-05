import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT } from "../queries/projectQuery";

const Project = () => {
  // destructuring
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <h1>Something went wrong...</h1>;
  return <div>
    
  </div>;
};

export default Project;
