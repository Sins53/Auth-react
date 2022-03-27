import React, { useRef, useState, useEffect } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import useNewApi from "../../CustomHooks/useNewApi";
import { CommonForm, UserForm } from "./ReusedForm";
import { useDispatch } from "react-redux";
import { dataAdded } from "../../redux/action/dataAdded";

const AddModal = (props) => {
  const { postData } = useNewApi();

  const dispatch = useDispatch();

  const sname = useRef(null);
  const sdescription = useRef(null);

  // const uname = useRef(null);
  // const uemail = useRef(null);
  const upswd = useRef(null);

  /*  const common = (
    <>
      <div>
        <div className="row mt-3">
          <div className="col-4">
            <label> Name</label>
          </div>
          <div className="col-8">
            <input ref={sname} type="text" placeholder="Enter Name" />
          </div>
        </div>
      </div>
      <div>
        <div className="row mt-4">
          <div className="col-4">
            <label>Description</label>
          </div>
          <div className="col-8">
            <input
              ref={sdescription}
              type="text"
              placeholder="Enter Description"
            />
          </div>
        </div>
      </div>
    </>
  );
  const addUser = (
    <>
      <div>
        <div className="row mt-3">
          <div className="col-4">
            <label>Full Name</label>
          </div>
          <div className="col-8">
            <input ref={sname} type="text" placeholder="Enter Full Name" />
          </div>
        </div>
      </div>
      <div>
        <div className="row mt-4">
          <div className="col-4">
            <label>Email</label>
          </div>
          <div className="col-8">
            <input ref={sdescription} type="email" placeholder="Enter Email" />
          </div>
        </div>
      </div>
      <div>
        <div className="row mt-4">
          <div className="col-4">
            <label>Password</label>
          </div>
          <div className="col-8">
            <input ref={upswd} type="text" placeholder="Enter Password" />
          </div>
        </div>
      </div>
    </>
  ); */

  const submitData = () => {
    var name = sname.current.value;
    var description = sdescription.current.value;
    postData(props.url, { name, description });
    dispatch(dataAdded());
    // getData(props.url);
  };
  const submitUser = () => {
    var name = sname.current.value;
    var email = sdescription.current.value;
    var password = upswd.current.value;
    postData(props.url, { name, email, password });
    dispatch(dataAdded());
    // console.log(name, email, password);
  };

  return (
    <>
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#AddModal"
      >
        <i>
          <AiOutlinePlus />
        </i>
        {" Add " + props.name}
      </button>

      <div
        className="modal fade AddModal"
        id="AddModal"
        tabindex="-1"
        aria-labelledby="AddModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="AddModal-header">
                <h3>{"Add " + props.name}</h3>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="container AddModal-body text-start">
                  {props.extra === true ? (
                    <UserForm
                      sname={sname}
                      sdescription={sdescription}
                      upswd={upswd}
                    />
                  ) : (
                    <CommonForm sname={sname} sdescription={sdescription} />
                  )}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className="text-end AddModal-footer">
                {props.extra === true ? (
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={submitUser}
                  >
                    Add User
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                    onClick={submitData}
                  >
                    Add
                  </button>
                )}
                <button
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddModal;
