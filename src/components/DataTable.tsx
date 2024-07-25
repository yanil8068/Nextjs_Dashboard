import React from "react";

const DataTable = () => {
  const data = [
    { id: 1, name: "John", age: 28 },
    { id: 2, name: "Jane", age: 22 },
    // Add more data points
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
