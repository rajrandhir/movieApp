import React from "react";
import { useGlobalContext } from "../context/context";
import SearchIcon from "@mui/icons-material/Search";

import {
  InputAdornment,
  FormControl,
  OutlinedInput,
} from "@mui/material";

const Search = () => {
  const { querry, setQuerry, isError } = useGlobalContext();
  const handleChange = (e) => {
    setQuerry(e.target.value);
  };

  return (
    <div className="container">
      <div>
        <div style={{ margingBottom: "1rem" }}></div>
        <form>
          <FormControl variant="outlined">
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Search here"
              value={querry}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              inputProps={{
                "aria-label": "weight",
              }}
              size="small"
              style={{ borderRadious: "5px" }}
            />
          </FormControl>
        </form>
        <div style={{ color: "red", textAlign: "center" }}>
          <p>{isError.show && isError.msg}</p>
        </div>
      </div>
    </div>
  );
};

export default Search;
