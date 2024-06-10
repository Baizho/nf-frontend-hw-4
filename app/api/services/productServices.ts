import axios from "axios";
import { axiosProduct } from "../axiosInstances";
import { useQuery } from "@tanstack/react-query";

const getAllProducts = async () => {
    const response = await axiosProduct.get("/products");
    // console.log(response);
    return response;
}

const getAllCategories = async () => {
    const response = await axiosProduct.get("/products/categories");
    // console.log(response);
    return response;
}

const getCategory = async (category:string) => {
    const response = await axiosProduct.get(`/products/category/${category}`);
    // console.log(response);
    return response;
}

export {
    getAllProducts,
    getAllCategories,
    getCategory
}