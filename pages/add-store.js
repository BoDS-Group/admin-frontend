import Layout from "@/components/Layout";
import Link from "next/link";
import {useEffect, useState} from "react";
import axiosInstance from "@/components/AxiosInstance";
import { fetchProducts, fetchCategories } from "@/utils/api";
import StoreForm from "@/components/StoreForm";

export default function AddStore() {
  return (
    <Layout>
      <h1>New Store</h1>
      <StoreForm />
    </Layout>
  );
}