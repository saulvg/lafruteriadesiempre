import {useEffect, useState} from 'react'; 

const useGetProduct = (idProduct, setError) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [pricekg, setPricekg] = useState('');
    const [update, setUpdate] = useState('');
    const [showw, setShoww] = useState('')
    const [photo, setPhoto] = useState('');


    useEffect(()=>{
        const getProduct = async () =>{
            try {
                const res = await fetch(`${process.env.REACT_APP_BACKEND}/products/get-a-product/${idProduct}`,{
                    method:'GET'
                });
                const body = await res.json();

                if (res.ok){
                    
                    setName(body.data[0].name);
                    setDescription(body.data[0].description);
                    setPricekg(body.data[0].pricekg);
                    setShoww(body.data[0].showw);
                    setPhoto(body.data[0].photo);
                }else{
                    setError(body.message);
                }
            } catch (error) {
                console.error(error);
            }
        }
        getProduct();
    }, [idProduct, setError, update]);

    return {name, setName, description, setDescription, pricekg, setPricekg, showw, setShoww, photo, setUpdate}
}

export default useGetProduct;