import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from 'react-router';

const baseUrl = "http://127.0.0.1:8000/api";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}/products`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error Fetching Data", err);  
    });
  }, []);

  return products;
};

export default useProducts;
