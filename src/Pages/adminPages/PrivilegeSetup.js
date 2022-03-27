import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewReactTable from "../../Components/NewReactTable";
import useNewApi from "../../CustomHooks/useNewApi";

const PrivilegeSetup = () => {
  const { id } = useParams();

  const [value, setValue] = useState(null);
  const { getData, apiData, postData } = useNewApi();

  useEffect(() => {
    getData(`roles/${id}`);
    setValue(apiData);
  }, [apiData]);

  return (
    <>
      {value?.data ? (
        <>
          <div className="row justify-content-between">
            <div className="col">
              <h2>
                Privilege Setup for
                <span className="text-primary"> {value.data.name} </span>
              </h2>
            </div>
            <div className="col-auto text-end">
              <Link to={"/roles/"}>Back</Link>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
      <NewReactTable num={1} url={"roles"} />
    </>
  );
};

export default PrivilegeSetup;
