import { useState, useEffect, ChangeEvent } from "react";
import "./style.css";
import { getUsers } from "../../APIs/requests";
import { CarInterface, TableColumn } from "../../types";
import Table from "../../components/Table/Table";

const CarsTable = () => {
  const [carData, setCarData] = useState<CarInterface[]>([]);
  const [filteredData, setFilteredData] = useState<CarInterface[]>([]);

  const fetchCars = async () => {
    try {
      const response = await getUsers();
      setCarData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.error("Error fetching car data:", error);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.toLowerCase();

    const filteredCars = carData.filter((car: CarInterface) => {
      const { id, brand, model, year, color } = car;

      return (
        id.toString().toLowerCase().includes(searchTerm) ||
        brand.toLowerCase().includes(searchTerm) ||
        model.toLowerCase().includes(searchTerm) ||
        year.toString().includes(searchTerm) ||
        color.toLowerCase().includes(searchTerm)
      );
    });

    setFilteredData(filteredCars);
  };

  const columns: TableColumn[] = [
    { key: "id", label: "ID" },
    { key: "brand", label: "Brand" },
    { key: "model", label: "Model" },
    { key: "year", label: "Year" },
    { key: "color", label: "Color" },
  ];

  return (
    <>
      <div className="search-container">
        <label htmlFor="search">Search:</label>
        <input type="text" id="search" onChange={handleSearchChange} />
      </div>
      <Table
        data={filteredData}
        columns={columns}
        setFilteredData={setFilteredData}
      />
    </>
  );
};

export default CarsTable;
