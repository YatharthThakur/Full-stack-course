import React, {useState, useEffect} from "react";
import axios from 'axios';
// import { useParams } from "react-router-dom";
function ProductComponent() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);
    // const {id} = useParams();
    // useEffect(() => {
    //     // calls product api
        
    //     axios.get(`https://fakestoreapi.com/products/${id}`).then((response)=>{setProduct(response.data)})
    //     .catch((error)=>{
    //         console.log(error);
    //         })       
    //     }, []);

    // useEffect(async() => 
    // {
    //     // calls product api
    //     try{
    //         setLoading(true);
    //         const response = await axios.get(`https://fakestoreapi.com/products/1`);
    //         console.log(response.data);
    //         setProduct(response.data);
    //         setLoading(false);
    //     }
    //     catch(error){
    //         console.log(error);
    //     }      
    // }, []);
    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            const response = await axios.get(`https://fakestoreapi.com/products/1`);
            setProduct(response.data);
        }
        fetchData();
        setLoading(false);
      }, []);
      
    return loading ? (
        <p>Loading..........</p>
      ) : (
        <div>
          <img height="500px" width="500px" src={product.image} alt="pro" />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
    );
}
export default ProductComponent;