import React from "react";
import DisplayProducts from "../Components/Products/DisplayProducts";
import ProductAdd from "../Components/Products/ProductsModals/ProductAdd";

const ProductsPage = () => {
  return (
    <>
      <>
        <div>
          <h2>Products Page</h2>
        </div>
        <div className="text-end">
          <ProductAdd name={"Products"} url={"product"} />
        </div>
        <DisplayProducts />
      </>
    </>
  );
};

export default ProductsPage;
