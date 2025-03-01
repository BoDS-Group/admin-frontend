import Layout from "@/components/Layout";
import Link from "next/link";
import {useEffect, useState} from "react";
import axiosInstance from "@/components/AxiosInstance";
import { fetchProducts, fetchCategories } from "@/utils/api";
import StoreForm from "@/components/StoreForm";

export default function AddStore() {
  const [products,setProducts] = useState([]);
  const [categories,setCategories] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const productsData = await fetchProducts();
    const categoriesData = await fetchCategories();
    setProducts(productsData);
    setCategories(categoriesData);
  }

  function getCategory(categoryId) {
    const category = categories.find(category => category.id === categoryId);
    return category ? category.name : 'N/A';
  }

  return (
    <Layout>
      <h1>New Store</h1>
      <StoreForm />
    </Layout>
  );
}