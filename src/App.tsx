
import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import { CountryDetails } from "./components/CountryDetails";
import { Home } from './components/Home';

function App() {
  let { countryName } = useParams();
  return (
      <div>
        <Routes>
          <Route
              path={'/'}
              element={<Home/>}
          />
          <Route
              path={`/details/:countryName`}
              element={<CountryDetails/>}
          />
        </Routes>
      </div>
  );
}

export default App;
