import React from "react";
import AddModal from "../../Components/AddModal";
import DelModal from "../../Components/DelModal";
import ReactTable from "../../Components/ReactTable";

const CreateUser = () => {
  return (
    <>
      <div>
        <h2>User Setup</h2>
      </div>
      <div className="text-end">
        <AddModal name={"User"} extra={true} />
      </div>
      <ReactTable num={0} url={"user"} method={"GET"} />
      <DelModal />
    </>
  );
};

export default CreateUser;
