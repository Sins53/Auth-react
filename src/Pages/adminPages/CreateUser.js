import React from "react";
import AddModal from "../../Components/BootstrapModalEdited/AddModal";
import NewReactTable from "../../Components/NewReactTable";

const CreateUser = () => {
  return (
    <>
      <div>
        <h2>User Setup</h2>
      </div>
      <div className="text-end">
        <AddModal name={"User"} extra={true} url={"user"} />
      </div>
      <NewReactTable num={0} url={"user"} method={"GET"} />
    </>
  );
};

export default CreateUser;
