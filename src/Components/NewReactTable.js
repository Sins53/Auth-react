import React, { useEffect, useState } from "react";
import { useTable } from "react-table";
import useApi from "../CustomHooks/useApi";
import useNewApi from "../CustomHooks/useNewApi";

const NewReactTable = (props) => {
  const { num, url } = props;
  const [value, setValue] = useState(null);
  const { getData, apiData } = useNewApi();
  // const { apiData, getData } = useApi(url);

  useEffect(() => {
    setValue(getData(url));
  }, []);

  useEffect(() => {
    console.log(apiData);
  }, apiData);

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
  const data = React.useMemo(
    () => [{ col1: 1, col2: "name", col3: "Email", col4: "Buttons" }],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "S.N",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: values[num].title,
        accessor: "col2",
      },
      {
        Header: values[num].description,
        accessor: "col3",
      },
      {
        Header: "Actions",
        accessor: "col4",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: "solid 2px black" }}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps()}
                style={{
                  border: "solid 2px red",
                  background: "aliceblue",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: "10px",
                      border: "solid 1px gray",
                      background: "papayawhip",
                    }}
                  >
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default NewReactTable;
