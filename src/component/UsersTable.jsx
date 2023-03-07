import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const UsersTable = () => {
  const [users, SetUsers] = useState([]);
  const getUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      SetUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const cols = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "User Name",
      selector: (row) => row.username,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Phone",
      selector: (row) => row.phone,
    },
  ];

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      {users?<DataTable columns={cols} data={users} pagination fixedHeader/> :'Loading...'}
      
    </>
  );
};

export default UsersTable;
