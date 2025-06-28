import "../App.css";
import React from "react";
import {
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";


const FilterBar = ({ filters, onFilterChange }) => {

  console.log("filters", filters);
  const handleCategoryChange = (e) => {
    onFilterChange({ ...filters, category: e.target.value });
  };

  const handleEraChange = (e) => {
    onFilterChange({ ...filters, era: e.target.value });
  };
  const handlePhaseChange = (e) => {
    onFilterChange({ ...filters, phase: e.target.value });
  };
   const handlLikeChange = (e) => {
    onFilterChange({ ...filters, like: e.target.checked});
  };

  return (
    <div className="filterbar">
      <Box sx={{ minWidth: 150}}>
        <FormControl fullWidth size="small" sx={{backgroundColor: "white"}}>
          <InputLabel htmlFor="filter_category">Category</InputLabel>
          <Select
            labelId="filter_category"
            id="filter_category"
            value={filters.category}
            label="Category"
            onChange={handleCategoryChange}
            size='small'
          >
            <MenuItem value="">
              <>All</>
            </MenuItem>
            <MenuItem value={"General"}>General</MenuItem>
            <MenuItem value={"Player"}>Player</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 150}}>
        <FormControl fullWidth size="small"  sx={{backgroundColor: "white"}}>
          <InputLabel htmlFor="filter_era">Era</InputLabel>
          <Select
            labelId="filter_era_label"
            id="filter_era"
            value={filters.era}
            label="Age"
            onChange={handleEraChange}
          >
            <MenuItem value="">
              <>All</>
            </MenuItem>
            <MenuItem value={"21st"}>21st century</MenuItem>
            <MenuItem value={"20th"}>20th century</MenuItem>
            <MenuItem value={"19th"}>19th century</MenuItem>
            <MenuItem value={"18th"}>18th century</MenuItem>
            <MenuItem value={"17th"}>17th century</MenuItem>
            <MenuItem value={"16th"}>16th century</MenuItem>
            <MenuItem value={"15th"}>15th century</MenuItem>
            <MenuItem value={"14th"}>14th century</MenuItem>
            <MenuItem value={"13th"}>13th century</MenuItem>
            <MenuItem value={"12th"}>12th century</MenuItem>
            <MenuItem value={"11th"}>11th century</MenuItem>
            <MenuItem value={"10th"}>10th century</MenuItem>
            <MenuItem value={"9th"}>9th century</MenuItem>
            <MenuItem value={"8th"}>8th century</MenuItem>
            <MenuItem value={"7th"}>7th century</MenuItem>
            <MenuItem value={"6th"}>6th century</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 150}} >
        <FormControl fullWidth size="small"  sx={{backgroundColor: "white"}}>
          <InputLabel htmlFor="filter_phase">Phase</InputLabel>
          <Select
            labelId="filter_phase"
            id="filter_phase"
            value={filters.phase}
            label="Phase"
            onChange={handlePhaseChange}
          >
            <MenuItem value="">
              <>All</>
            </MenuItem>
            <MenuItem value={"Opening"}>Opening</MenuItem>
            <MenuItem value={"Middlegame"}>Middlegame</MenuItem>
            <MenuItem value={"Endgame"}>Endgame</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{ minWidth: 150 }}>
        <FormGroup>
          <FormControlLabel sx={{
                color: "grey",
              }} control={<Checkbox  color="default" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } } }   onChange={handlLikeChange} />} label="Favorites only" />
        </FormGroup>
      </Box>
    </div>
  );
};

export default FilterBar;
