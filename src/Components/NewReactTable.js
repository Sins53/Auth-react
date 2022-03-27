import React, { useEffect, useState } from "react";
import useNewApi from "../CustomHooks/useNewApi";
import DelModal from "./BootstrapModalEdited/DelModal";
import UpdateModal from "./BootstrapModalEdited/UpdateModal";
import { GrUserSettings } from "react-icons/gr";
import { Link } from "react-router-dom";

const NewReactTable = (props) => {
  var a = "",
    i = 0;
  const { num, url } = props;
  const [value, setValue] = useState(null);
  const { getData, apiData, delData } = useNewApi();

  const [id, setId] = useState(null);

  if (url === "screens") {
    a = "Screens";
  } else if (url === "roles") {
    a = "Roles";
  }

  useEffect(() => {
    setValue(apiData);
    // console.log(apiData);
  }, [apiData]); ///why []

  useEffect(() => {
    getData(url);
    if (id !== null) {
      delData(id);
      getData(url);
      // console.log("whatttttt");
    }
  }, id);

  const values = [
    {
      title: "User",
      description: "Email",
    },
    {
      title: "Role Name",
      description: "Description",
    },
    {
      title: "Screen Name",
      description: "Description",
    },
  ];

  return (
    <>
      {value !== null ? (
        <div>
          <table class="table mt-5">
            <thead>
              <tr>
                <th scope="col-1">S.N</th>
                <th scope="col-4">{values[num].title}</th>
                <th scope="col-4">{values[num].description}</th>
                <th scope="col-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {value.data.map((item) => {
                {
                  i++;
                }
                return (
                  <tr>
                    <th>{i}</th>
                    <td>{item.name}</td>
                    <td>{item.description ? item.description : item.email}</td>
                    <td>
                      <div className="row">
                        <div className="col">
                          <DelModal
                            url={url}
                            name={item.name}
                            id={item.id}
                            setId={setId}
                          />
                        </div>
                        <div className="col">
                          {url === "user" ? (
                            <UpdateModal
                              name={"User"}
                              extra={true}
                              url={"user"}
                              refname={item.name}
                              refemail={item.email}
                              id={item.id}
                            />
                          ) : (
                            <UpdateModal
                              name={a}
                              url={url}
                              refname={item.name}
                              refemail={item.description}
                              id={item.id}
                            />
                          )}
                        </div>
                        {url === "roles" ? (
                          <div className="col">
                            <Link to={`/roles/${item.id}`}>
                              <GrUserSettings />
                            </Link>
                          </div>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-primary">Loading....</h2>
      )}
    </>
  );
};

export default NewReactTable;
