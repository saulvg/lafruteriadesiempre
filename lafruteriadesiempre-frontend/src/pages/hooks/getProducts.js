import { useEffect, useState } from "react";

const useGetProducts = (token, setError) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async () =>{
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND}//products/get-products`,{
                    method:'GET',
                    headers:{
                        Authorization:token
                    }
                });
                const body = await res.json();

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

    return products
}

export default useGetProducts;