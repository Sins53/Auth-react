import React, { useRef, useEffect } from "react";
import { MdModeEditOutline } from "react-icons/md";
import useNewApi from "../CustomHooks/useNewApi";

const UpdateModal = (props) => {
  const { name, extra, refname, refemail, url, id } = props;
  const { putData, getData } = useNewApi();

  const sname = useRef(null);
  const sdescription = useRef(null);

  // const uname = useRef(null);
  // const uemail = useRef(null);
  const pswd = useRef(null);

  const fixIt = refname.split(" ");
  const fixedIt = fixIt.join("");

  useEffect(() => {
    sname.current.placeholder = refname;
    sdescription.current.placeholder = refemail;
    if (url === "screens") {
      sname.current.value = refname;
    }
  });

  const common = (
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
            <input ref={pswd} type="text" placeholder="Enter Password" />
          </div>
        </div>
      </div>
    </>
  );

  const submitData = () => {
    var name = sname.current.value;
    var description = sdescription.current.value;
    putData(`${url}/${id}`, { name, description });
    sname.current.placeholder = props.refname;
    sdescription.current.placeholder = props.refemail;
    // getData(props.url);
  };
  const submitUser = () => {
    var name = sname.current.value;
    var email = sdescription.current.value;
    var password = pswd.current.value;
    putData(`${url}/${id}`, { name, email, password });
    sname.current.placeholder = props.refname;
    sdescription.current.placeholder = props.refemail;
    // console.log(name, email, password);
  };

  return (
    <>
      <div>
        <i data-bs-toggle="modal" data-bs-target={`#${fixedIt}`}>
          <MdModeEditOutline />
        </i>
      </div>

      <div
        className={`modal fade ${fixedIt}`}
        id={fixedIt}
        tabindex="-1"
        aria-labelledby={`${fixedIt}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="UpdateModal-header">
                <h3>{"Update " + props.name}</h3>
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
                <div className="container UpdateModal-body text-start">
                  {props.extra === true ? addUser : common}
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <div className={`text-end ${fixedIt}-footer`}>
                {props.extra === true ? (
                  <button
                    className="btn btn-primary"
                    onClick={submitUser}
                    data-bs-dismiss="modal"
                  >
                    Update User
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={submitData}
                    data-bs-dismiss="modal"
                  >
                    Update
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

export default UpdateModal;
