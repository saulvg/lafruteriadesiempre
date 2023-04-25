import { useEffect, useState } from "react";

const useGetProducts = (setError, toogleShoww) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async () =>{
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND}/products/get-products`,{
                    method:'GET'
                });
                const body = await res.json();

                if(res.ok){
                    setProducts(body.data)
                    /* console.log('body data',body.data); */
                }else{
                    setError(body.message);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getProducts();
    },[setError, toogleShoww]);

    return {products}
}

export default useGetProducts;