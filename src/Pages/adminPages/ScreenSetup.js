import React from "react";
import AddModal from "../../Components/BootstrapModalEdited/AddModal";
import NewReactTable from "../../Components/NewReactTable";

const ScreenSetup = () => {
  return (
    <>
      <div>
        <h2>Screen Details</h2>
      </div>
      <div className="text-end">
        <AddModal name={"Screen"} url={"screens"} />
      </div>
      <NewReactTable num={2} url={"screens"} />
    </>
  );
};

export default ScreenSetup;
