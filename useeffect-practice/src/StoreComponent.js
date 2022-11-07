// import React, {useEffect, useState} from 'react'
// import axios from 'axios';
// export default function StoreComponent() {
    
//     const [categories, setCategories] = useState([]);
//     const [selectcategories, setSelectedCategories] = useState([]);
//     const [products, setProduct] = useState([]);
//     useEffect(() =>{
//         // fetch('https://fakestoreapi.com/products/categories')
//         //     .then(res=>res.json())
//         //     .then(json=>{
//         //         setCategories(json);
//         //     })
//         axios.get('https://fakestoreapi.com/products/categories').then((response) =>{
//             setCategories(response.data);
//             setSelectedCategories(response.data[0]);    
//             })
//             .catch((error)=>{alert("please retry")});
//     },[]);
//     // useEffect(() =>{
//     //     fetch(`https://fakestoreapi.com/products/category/${selectcategories}`)
//     //         .then(res=>res.json())
//     //         .then(json=>{
//     //             setProduct(json);
//     //             console.log(json);
//     //             })
//     // },[selectcategories]);
//     const getProductByCategory = async () =>{
//         try{
//             const response = await axios.get(`https://fakestoreapi.com/products/category/${selectcategories}`);
//             setProduct(response.data);
//         }
//         catch(error){
//             console.log(error);
//         }
//     }

//     const handleChange = (e) => {
//         setSelectedCategories(e.target.value);
//     };

//     useEffect(() => {
//         if (selectcategories) {
//             getProductByCategory();
//         }
//     }, [selectcategories]);
    
//     return (
//     <div>
//         <select onChange={handleChange}>
//             <option value={categories[0]}>{categories[0]}</option>
//             <option value={categories[1]}>{categories[1]}</option>
//             <option value={categories[2]}>{categories[2]}</option>
//             <option value={categories[3]}>{categories[3]}</option>
//         </select>
//         {products.map((product)=>{
//             return(
//                 <div>
//                     <img src={product.image} alt="product"/>
//                 </div>
//             );
//         })}
//     </div>
//     )
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function StoreComponent() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products/categories")
      .then((response) => {
        setLoading(false);
        setCategories(response.data);
        setSelectedCategory(response.data[0]);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  const getProductByCategory = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://fakestoreapi.com/products/category/${selectedCategory}`
      );
      setLoading(false);

      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    if (selectedCategory) {
      getProductByCategory();
    }
  }, [selectedCategory]);

  return loading ? (
    <p>Loading..........</p>
  ) : (
    <div className="App">
      <select onChange={handleChange}>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category.toUpperCase()}
          </option>
        ))}
      </select>
      <div>
        <h2>{selectedCategory && selectedCategory.toUpperCase()}</h2>

        {products.map((product) => {
          return (
            <div className="product">
              <>
                <img height="500px" width="500px" src={product.image} />{" "}
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <NavLink to={`product/${product.id}`}>
                    <button>Buy now</button>
                </NavLink>
                <hr></hr>
              </>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StoreComponent;