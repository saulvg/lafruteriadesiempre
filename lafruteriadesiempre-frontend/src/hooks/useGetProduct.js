import {useEffect, useState} from 'react'; 

const useGetProduct = (idProduct, setError) => {
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        const getProduct = async () =>{
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND}/products/get-a-product/${idProduct}`,{
                    method:'GET'
                });
                const body = await res.json();

                if (res.ok){
                    setProduct(body.data);
                }else{
                    setError(body.message);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getProduct();
    }, [idProduct, setError]);

    return {product}
}

export default useGetProduct;