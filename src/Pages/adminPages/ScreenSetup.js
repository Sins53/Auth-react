import React from "react";
import AddModal from "../../Components/AddModal";
import ReactTable from "../../Components/ReactTable";

const ScreenSetup = () => {
  return (
    <>
      <div>
        <h2>Screen Details</h2>
      </div>
      <div className="text-end">
        <AddModal name={"Screen"} />
      </div>
      <ReactTable num={2} url={"screens"} method={"GET"} />
    </>
  );
};

export default ScreenSetup;
