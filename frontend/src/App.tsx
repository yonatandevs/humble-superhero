import React, { useState } from "react";
import AddSuperheroForm from "./components/AddSuperheroForm";
import SuperheroList from "./components/SuperheroList";
import "./index.css";

const App = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="bg-gray-800 text-white min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Humble Superheroes</h1>
      <AddSuperheroForm onAdd={() => setRefresh(!refresh)} />
      <SuperheroList refresh={refresh} />
    </div>
  );
};

export default App;
