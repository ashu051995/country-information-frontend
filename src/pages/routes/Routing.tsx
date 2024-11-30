import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CountryList from "../country-list/CountryList";
import CountryDetailInterface from "../country-detail/CountryDetail";

const Routing = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CountryList />} />
          <Route path="/:code" element={<CountryDetailInterface />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routing;
