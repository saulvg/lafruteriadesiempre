import { useState } from "react";
import useGetProducts from "./hooks/getProducts";

const Products = ()=> {    

   const {products} = useGetProducts(token, setError);

    return(
        <h2>Soy la P de Products</h2>
    );
}

export default Products;