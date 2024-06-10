"use client";

import React from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../app/api/services/productServices";
type Props = {};

const CategoryList = (props: Props) => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["CategoryData"],
    queryFn: getAllCategories,
  });
  if (isLoading)
    return <div className="text-center">Categories are loading...</div>;
  if (isError) {
    console.log(error);
    return <div className="text-center">Sorry there was an error</div>;
  }
  return (
    <div className="flex p-4 justify-center gap-4">
      {data?.data.map((category: string, index: number) => {
        return (
          <Link
            href={`category/${category}`}
            key={index}
            className="h-32 w-48 rounded shadow  flex flex-col"
          >
            <div className="h-4/6 w-full flex items-center justify-center bg-gray-200 text-gray-400  aspect-square">
              *photo*
            </div>
            <div className="h-2/6 flex items-center justify-center  text-base font-bold">
              {category}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CategoryList;
