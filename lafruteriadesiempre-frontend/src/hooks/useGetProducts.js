import { useEffect, useState } from "react";

const useGetProducts = (token, setError) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async () =>{
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND}/products/get-products`,{
                    method:'GET'
                });
                const body = await res.json();
                console.log("body",body.data);

                if(res.ok){
                    setProducts(body.data)
                }else{
                    setError(body.message)
                }
            } catch (error) {
                console.error(error);
            }
        }
        getProducts();
    },[token, setError]);

    return {products}
}

export default useGetProducts;