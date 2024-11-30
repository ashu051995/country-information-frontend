import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CountryList from "../country-list/CountryList";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CountryList />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
