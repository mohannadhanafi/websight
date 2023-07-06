import Header from "../../components/Header/Header";
import CarsTable from "./CarsTable";
import "./style.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className="container home-page">
        <CarsTable />
      </div>
    </>
  );
};

export default Home;
