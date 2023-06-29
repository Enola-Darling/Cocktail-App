import { useState } from "react";
import ProductSection from "./components/ProductSection";
import ProductList from "./components/ProductSection/ProductList/ProductList";
import "./App.css";

function App() {
  const [productSection, setProductSection] = useState("");

  return (
    <div className="App">
      {productSection ? (
        <ProductSection
          productSection={productSection}
          setProductSection={setProductSection}
        />
      ) : (
        <>
          <ProductList name="rum" setProductSection={setProductSection} />
          <ProductList name="vodka" setProductSection={setProductSection} />
          <ProductList name="gin" setProductSection={setProductSection} />
        </>
      )}
    </div>
  );
}

export default App;