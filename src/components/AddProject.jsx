import { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { useMutation, useQuery } from "@apollo/client";

import { ADD_PROJECT } from "../mutations/projectMutation.js";
import { GET_PROJECTS } from "../queries/projectQuery.js";
import { GET_CLIENTS } from "../queries/clientQuery.js";

const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("new");
  const [clientId, setClientId] = useState("");

  const [addProject] = useMutation(ADD_PROJECT, {
    variables: { name, description, status, clientId },
    update(cache, { data: { addProject } }) {
      const { projects } = cache.readQuery({ query: GET_PROJECTS });
      cache.writeQuery({
        query: GET_PROJECTS,
        data: { projects: [...projects, addProject] },
      });
    },
  });


  // Get clients for select
  const { loading, error, data } = useQuery(GET_CLIENTS);

  const onSubmit = (e) => {
    e.preventDefault();
    // validate client
    if (name === "" || description === "" || status === "") {
      alert("Please fill all fields");
    }


    addProject(name, description, clientId, status);

    // addClient(name, description, status);

    // clearing form
    setName("");
    setDescription("");
    setStatus("new");
    setClientId("");

    if (loading) return null;
    if (error) return <h1>Oops something went wrong!</h1>;
  };
  return (
    <>
      {!loading && !error && (
        <>
          <button
            type='button'
            className='btn btn-secondary'
            data-bs-toggle='modal'
            data-bs-target='#addProject'>
            <div className='d-flex align-items-center'>
              <CiBoxList className='icon' />
              <div>Add New Project</div>
            </div>
          </button>

          <div
            className='modal fade'
            id='addProject'
            aria-labelledby='addProject'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h1 className='modal-title fs-5' id='exampleModalLabel'>
                    Add your new project
                  </h1>
                  <button
                    type='button'
                    className='btn-close'
                    data-bs-dismiss='modal'
                    aria-label='Close'></button>
                </div>
                <div className='modal-body'>
                  <form onSubmit={onSubmit}>
                    {/* Name */}
                    <div className='mb-3'>
                      <label className='form-label'>Name</label>
                      <input
                        type='text'
                        className='form-control'
                        id='name'
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    {/* Email */}
                    <div className='mb-3'>
                      <label className='form-label'>Description</label>
                      <textarea
                        className='form-control'
                        id='description'
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      />
                    </div>

                    {/* Phone */}
                    <div className='mb-3'>
                      <label className='form-label'>Status</label>
                      <select
                        id='status'
                        className='form-select'
                        value={status}
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}>
                        <option value='new'>Not Started</option>
                        <option value='in progress'>progress</option>
                        <option value='completed'>completed</option>
                      </select>
                    </div>

                    <div className='mb-3'>
                      <label className='form-label'>Client</label>
                      <select
                        id='clientId'
                        className='form-select'
                        value={clientId}
                        onChange={(e) => {
                          setClientId(e.target.value);
                        }}>
                        <option value=''>Select Client</option>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type='submit'
                      className='btn btn-primary'
                      data-bs-dismiss='modal'>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AddProject;
