import "./App.css";
import Carousel from "./components/Carousel";
import FilterBar from "./components/FilterBar";
import { useState } from "react";
import facts from "../db/chess_fan_facts_full.json";

function App() {
  const [filters, setFilters] = useState({
    category: "",
    era: "",
    phase: "",
    like: false,
  });

  const getFavorites = () => {
    const stored = sessionStorage.getItem("favorites");
    return stored ? JSON.parse(stored) : [];
  };

  const handleFilterChange = (newFilters) => {
    console.log('handleFilterChange triggered', newFilters);
    if (newFilters){
          setFilters(newFilters);
    }
    else{
          setFilters((prev) => ({ ...prev }));
    }
  };
  const filteredData = facts.facts.filter((item) => {
    const matchesCategory =
      filters.category === "" || item.category === filters.category;
    const matchesEra = filters.era === "" || item.century.includes(filters.era);
    const matchesPhase = filters.phase === "" || item.phase === filters.phase;

    const favorites = getFavorites();
    const matchesLike =
      filters.like === "" || // assuming "" means "no filter"
      (filters.like === true && favorites.includes(item.id)) ||
      (filters.like === false && !favorites.includes(item.id));

    return matchesCategory && matchesEra && matchesPhase && matchesLike;
  });

  return (
    <div className="chessboard-bg">
      <FilterBar filters={filters} onFilterChange={handleFilterChange} />
      <Carousel filteredData={filteredData} onFilterChange={handleFilterChange} />
    </div>
  );
}

export default App;
