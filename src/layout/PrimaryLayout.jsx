import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PrimaryLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-32">
        <Outlet/>
      </main>
    </>
  );
};

export default PrimaryLayout;
