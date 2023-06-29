import { useState } from "react";
// import ProductSection from "./ProductSection";
// import { GET } from "../../utils/http";
import "./SearchBar.css";

const SearchBar = ({ onHandleSearch }) => {
    const [searchInput, setSearchInput] = useState("");
  
    const onHandleSubmit = (e) => {
      e.preventDefault();
      onHandleSearch(searchInput);
    };
  
    return (
      <form onSubmit={onHandleSubmit} className="SearchBar">
        <input
          type="text"
          placeholder="Inserisci il nome del cocktail"
          name="name"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <input type="submit" value="Invia" />
      </form>
    );
  };
  
  export default SearchBar;