import React from "react";
import AddModal from "../../Components/AddModal";
import ReactTable from "../../Components/ReactTable";

const RoleSetting = () => {
  return (
    <>
      <div>
        <h2>Role Details</h2>
      </div>
      <div className="text-end">
        <AddModal name={"Role"} />
      </div>
      <ReactTable num={1} url={"roles"} method={"GET"} />
    </>
  );
};

export default RoleSetting;
