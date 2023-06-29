import { useState, useEffect } from "react";
import ProductItem from "../../ProductItem";
import "./ProductList.css";
import SearchBar from "../../Searchbar/Searchbar";


const ProductList = ({ name, setProductSection }) => {
  const [listData, setListData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" + name)
      .then((res) => res.json())
      .then((data) => setListData(data.drinks || []));
  }, [name]);

  const onHandleSearch = (searchInput) => {
    const filteredList = listData.filter((drink) =>
      drink.strDrink.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredData(filteredList);
  };

  useEffect(() => {
    setFilteredData(listData);
  }, [listData]);

  return (
    <div>
      <h2>{name}</h2>
      <SearchBar onHandleSearch={onHandleSearch} />
      <div className="ProductList__list">
        {filteredData.length > 0 ? (
          filteredData.map((drink) => (
            <ProductItem
              data={drink}
              setProductSection={setProductSection}
              key={drink.idDrink}
            />
          ))
        ) : (
          <p>No cocktails found.</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;