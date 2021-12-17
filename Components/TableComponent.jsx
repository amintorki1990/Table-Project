import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import useFetch from "../hooks/useFetch";

function TableComponent() {
  //   const [todosList, setTodosList] = useState([]);
  //   useEffect(() => {
  //     (async () => {
  //       const { data } = await axios(
  //         "https://jsonplaceholder.typicode.com/todos"
  //       );
  //       setTodosList(data);
  //     })();
  //   }, []);

  const [{ data, loading, error }] = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  const dataSource = data;

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "userId",
      dataIndex: "userId",
      key: "userId",
    },
    {
      title: "title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "completed",
      dataIndex: "completed",
      render: (completed) => (
        <span>
          {completed ? (
            <CheckOutlined style={{ color: "green" }} />
          ) : (
            <CloseOutlined style={{ color: "red" }} />
          )}
        </span>
      ),
    },
  ];

  return (
    <Table
      pagination={{ showSizeChanger: false }}
      dataSource={dataSource}
      columns={columns}
    />
  );
}

export default TableComponent;
