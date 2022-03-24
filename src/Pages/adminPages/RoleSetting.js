import React from "react";
import AddModal from "../../Components/AddModal";
import NewReactTable from "../../Components/NewReactTable";

const RoleSetting = () => {
  return (
    <>
      <div>
        <h2>Role Details</h2>
      </div>
      <div className="text-end">
        <AddModal name={"Role"} url={"roles"} />
      </div>
      <NewReactTable num={1} url={"roles"} />
    </>
  );
};

export default RoleSetting;
