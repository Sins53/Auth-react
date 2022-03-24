import React, { useEffect, useState } from "react";
import useNewApi from "../CustomHooks/useNewApi";
import DelModal from "./DelModal";

const NewReactTable = (props) => {
  var i = 0;
  const { num, url } = props;
  const [value, setValue] = useState(null);
  const { getData, apiData, delData } = useNewApi();

  const [id, setId] = useState(null);

  useEffect(() => {
    setValue(apiData);
    console.log(apiData);
  }, [apiData]);

  useEffect(() => {
    getData(url);
    if (id !== null) {
      // console.log(id);
      delData(id);
      getData(url);
      console.log("whatttttt");
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
                    <td>{item.description}</td>
                    <td>
                      <DelModal
                        url={url}
                        name={item.name}
                        id={item.id}
                        setId={setId}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <h2>Loading....</h2>
      )}
    </>
  );
};

export default NewReactTable;
