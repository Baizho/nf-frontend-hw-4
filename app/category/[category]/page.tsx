"use client";
import React from "react";
import { useParams } from "next/navigation";

type Props = {};

const CategoryPage = (props: Props) => {
  const { category } = useParams();
  return <div>{category} Page</div>;
};

export default CategoryPage;
