import React from "react";

function CommonForm(props) {
  const { sname, sdescription } = props;
  return (
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
}
function UserForm(props) {
  const { sname, sdescription, upswd } = props;
  return (
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
  );
}

export { CommonForm, UserForm };
