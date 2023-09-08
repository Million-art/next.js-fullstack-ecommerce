
import React from "react";
import Banner from "./component/Banner";
import Products from "../pages/component/Products";
import axios from "axios";
import { ProductProps } from "../../type";

interface Props {
  productData: ProductProps[];
}

export default function Home({ productData }: Props) {
   return (
    <main>
      <div className="mx-w-screen-xl max-auto">
        <Banner />
        <Products productData={productData} />
      </div>
    </main>
  );
}

export async function getServerSideProps() {
  try {
    // const res = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json");
    const res = await axios.get("https://fakestoreapiserver.reactbd.com/tech");
    const productData = await res.data;
    console.log(productData);
    return { props: { productData } };
  } catch (error) {
    // Empty array is returned to prevent the page from crashing
    return { props: { productData: [] } };
  }
}