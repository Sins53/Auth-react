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

  const [priv, setPriv] = useState([]);

  const screenName = useRef(null);
  const screenPrivleges = useRef(null);

  const dispatch = useDispatch();
  const screenData = useSelector((state) => state.screen.screen);

  useEffect(() => {
    dispatch(fetchScreen());
    setValue(apiData);
    // console.log(unique);
  }, [apiData]);

  useEffect(() => {
    getData(`roles/${id}`);
  }, [id]);

  useEffect(() => {
    setUnique(screenData);
  }, [screenData]);
  // console.log(unique);

  var abc = null;
  var arr123 = [];
  var obj = {
    create: false,
    read: false,
    update: false,
    delete: false,
  };

  const nextDisplay = () => {
    console.log(screenName);
    var a = screenName.current.children[0].outerText;
    var b = screenPrivleges.current.children[0].outerText;
    var arr = b.split(/\r?\n/);
    // console.log(arr);
    arr.forEach((item) => {
      if (item === "Create") {
        obj = { ...obj, create: true };
      } else if (item === "Read") {
        obj = { ...obj, read: true };
      } else if (item === "Update") {
        obj = { ...obj, update: true };
      } else if (item === "Delete") {
        obj = { ...obj, delete: true };
      }
    });
    console.log(obj);
    abc = {
      [a]: obj,
    };
    console.log(abc);
    arr123 = priv;
    arr123.push(abc);
    setPriv(arr123);
  };

  const clearPrivleges = () => {
    setPriv([]);
  };
  const postPrivleges = () => {
    // console.log({ id, mapping: { priv } });
    // console.log(priv);
    postData("roles/screen/mapping", { id, mapping: { priv } });
    setPriv([]);
    // console.log(priv);
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
          {priv
            ? priv.map((item) => {
                return <div>{JSON.stringify(item)}</div>;
              })
            : null}
          {/* <div>{JSON.stringify(priv)}</div> */}
          <div className="mt-5 col-md-12 text-center">
            <button className="btn btn-primary" onClick={postPrivleges}>
              Save Privlegges
            </button>
            <button className="btn btn-danger ml-4" onClick={clearPrivleges}>
              Clear
            </button>
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

//use this for multiple array field

// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);

// console.log(target);
// // expected output: Object { a: 1, b: 4, c: 5 }

// console.log(returnedTarget);
// // expected output: Object { a: 1, b: 4, c: 5 }
