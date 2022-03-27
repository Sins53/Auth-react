import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NewReactTable from "../../Components/NewReactTable";
import useNewApi from "../../CustomHooks/useNewApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchRole } from "../../redux/action/role";
// import Select from "react-select";

const UserRoleMap = () => {
  const { id } = useParams();

  const [value, setValue] = useState(null);
  const { getData, apiData, postData } = useNewApi();

  const dispatch = useDispatch();
  const roleData = useSelector((state) => state.role.role);

  const rid = useRef(null);

  useEffect(() => {
    dispatch(fetchRole());
    setValue(apiData);
    console.log("hey you");
  }, [apiData]);

  useEffect(() => {
    getData(`user/${id}`);
  }, [id]);

  const mapUserRole = () => {
    var obj = {
      userId: id,
      roleId: rid.current.value,
    };
    postData("user/role/map", obj);
  };

  return (
    <>
      {value?.data ? (
        <>
          <div className="row justify-content-between">
            <div className="col">
              <h2>
                User Map for :
                <span className="text-primary"> {value.data.name} </span>
              </h2>
            </div>
            <div className="col-auto text-end">
              <Link to={"/user/"}>Back</Link>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-4">
              <select>
                <option value={id}>{value.data.name}</option>
              </select>
            </div>
            <div className="col-4">
              <select ref={rid}>
                {roleData.map((item) => {
                  return (
                    <option value={item.id} key={item.name}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="col-2">
              <button className="btn btn-primary" onClick={mapUserRole}>
                Add
              </button>
            </div>
          </div>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
      <NewReactTable num={0} url={"user"} />
    </>
  );
};

export default UserRoleMap;
