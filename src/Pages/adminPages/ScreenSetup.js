import React from "react";
import AddModal from "../../Components/AddModal";
import NewReactTable from "../../Components/NewReactTable";
import DelModal from "../../Components/DelModal";

const ScreenSetup = () => {
  return (
    <>
      <div>
        <h2>Screen Details</h2>
      </div>
      <div className="text-end">
        <AddModal name={"Screen"} />
      </div>
      <NewReactTable num={2} url={"screens"} />
      <DelModal url={"screens/f7f71a95-ce2c-4a83-a769-226192d20806"} />
    </>
  );
};

export default ScreenSetup;
