import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewReactTable from "../../Components/NewReactTable";
import useNewApi from "../../CustomHooks/useNewApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchScreen } from "../../redux/action/screen";
import Select from "react-select";

const PrivilegeSetup = () => {
  const { id } = useParams();

  const [value, setValue] = useState(null);
  const [unique, setUnique] = useState([]);
  const { getData, apiData, postData } = useNewApi();

  const screenName = useRef(null);
  const screenPrivleges = useRef(null);

  const dispatch = useDispatch();
  const screenData = useSelector((state) => state.screen.screen);

  useEffect(() => {
    dispatch(fetchScreen());
    getData(`roles/${id}`);
    setValue(apiData);
    // console.log(unique);
  }, [apiData]);

  useEffect(() => {
    setUnique(screenData);
  }, [screenData]);
  // console.log(unique);

  const nextDisplay = () => {
    console.log(screenName.current.children[0].outerText);
  };
  var selectScreenName = [];
  const screens = unique.forEach((item) => {
    selectScreenName.push({ value: item.name, label: item.name });
  });
  const options = [
    { value: "create", label: "Create" },
    { value: "read", label: "Read" },
    { value: "update", label: "Update" },
    { value: "delete", label: "Delete" },
  ];

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
          <>
            <div ref={screenName} className="mt-5 row">
              <div className="col-4">
                <Select options={selectScreenName} />
              </div>
              <div ref={screenPrivleges} className="col-6">
                <Select isMulti options={options} />
              </div>
              <div className="col text-end">
                <button className="btn btn-primary" onClick={nextDisplay}>
                  ADD
                </button>
              </div>
            </div>
          </>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
      <NewReactTable num={1} url={"roles"} />
    </>
  );
};

export default PrivilegeSetup;
