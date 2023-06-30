import { useState } from "react";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductSection/ProductList/ProductList";
import Filters from "./components/Filter";
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");
  const [categoryList, setCategoryList] = useState(["rum", "vodka", "gin"]);

  return (
    <div className="App">
      <Filters
        categoryList={categoryList}
        setCategoryList={setCategoryList}
      />
      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          {categoryList.map((category) => (
            <ProductList
              name={category}
              setProductSection={setProductSection}
              key={category}
            />
          ))}
        </>
      )}
    </div>
  );
}

export default App;