import { useState } from "react";
import { CiBoxList } from "react-icons/ci";
import { useMutation, useQuery } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutation.js";

import { GET_PROJECTS } from "../queries/projectQuery.js";

const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
    const [status, setStatus] = useState("new");
    const [clientId, setClientId] = useState("")

//   console.log(addClient);

  const onSubmit = (e) => {
    e.preventDefault();
    // validate client
    if (name === "" || description === "" || status === "") {
      alert("Please fill all fields");
    }

    // addClient(name, description, status);

    // clearing form
    setName("");
    setDescription("");
    setStatus("new");
    setClientId("");
  };
  return (
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
  );
};

export default AddProject;
