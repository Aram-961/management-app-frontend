import { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { useMutation } from "@apollo/client";
import { DELETE_CLIENT } from "../mutations/clientMutation.js";
import { ADD_CLIENT } from "../mutations/clientMutation.js";

import { GET_CLIENTS } from "../queries/clientQuery.js";

const AddClientModal = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phone },
    update(cache, { data: { addClient } }) {
      const { clients } = cache.readQuery({ query: GET_CLIENTS });
      cache.writeQuery({
        query: GET_CLIENTS,
        data: { clients: [...clients, addClient] },
      });
    },
  });

  console.log(addClient);

  const onSubmit = (e) => {
    e.preventDefault();
    // validate client
    if (name === "" || email === "" || phone === "") {
      alert("Please fill all fields");
    }

    addClient(name, email, phone);

    // clearing form
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <>
      <button
        type='button'
        className='btn btn-primary'
        data-bs-toggle='modal'
        data-bs-target='#addClientModal'>
        <div className='d-flex align-items-center'>
          <CiUser className='icon' />
          <div>Add New Client</div>
        </div>
      </button>

      <div
        className='modal fade'
        id='addClientModal'
        aria-labelledby='addClientModal'
        aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='exampleModalLabel'>
                Add Client
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
                  <label className='form-label'>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>

                {/* Phone */}
                <div className='mb-3'>
                  <label className='form-label'>Phone</label>
                  <input
                    type='tel'
                    className='form-control'
                    id='phone'
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <button
                  type='submit'
                  className='btn btn-secondary'
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

export default AddClientModal;
