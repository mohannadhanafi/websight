import { useState } from "react";
import "./style.css";
import { TableColumn } from "../../types";

export type TableProps<T> = {
  data: T[];
  columns: TableColumn[];
  setFilteredData: (data: T[]) => void;
};

const Table = <T extends Record<string, any>>({
  data,
  columns,
  setFilteredData,
}: TableProps<T>) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  }>({ key: "id", direction: "asc" });

  const handleSort = (key: string) => {
    let direction = "asc";

    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      const valueA = a[key];
      const valueB = b[key];

      if (valueA < valueB) return direction === "asc" ? -1 : 1;
      if (valueA > valueB) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortConfig({ key, direction });
    setFilteredData(sortedData);
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? " ▲" : " ▼";
    }
    return "";
  };

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.key} onClick={() => handleSort(column.key)}>
              {column.label}
              {getSortIcon(column.key)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column) => (
              <td key={column.key}>{item[column.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
