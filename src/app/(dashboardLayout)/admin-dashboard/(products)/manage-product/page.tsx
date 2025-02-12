/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import ProductTableRow from "@/app/(dashboardLayout)/admin-dashboard/(products)/components/ProductTableRow";
import { TCategoryData, TProduct } from "@/types";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { CircleLoader } from "react-spinners";
import { getProducts } from "@/actions/getProducts";
import {  Pagination } from "antd";
import { PaginationProps, Select, SelectItem } from "@heroui/react";
import { useGetAllCategory } from "@/hooks/category.hook";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

const ManageProduct = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setMeta] = useState<TMeta>();
  const [products, setProducts] = useState<TProduct[]>();
  const { data: categories, isPending: isGetCategoriesPending } =
    useGetAllCategory();

  useEffect(() => {
    setIsLoading(true);
    const handleGetProducts = async () => {
      const response = await getProducts(search, page, sort, filter);
      setProducts(response.data);
      setMeta(response.meta);
    };
    handleGetProducts();
    setIsLoading(false);
  }, [search, page, sort, filter]);

  const onPageChange: PaginationProps["onChange"] = (pageNumber) => {
    setPage(pageNumber);
  };

  const handleSortSelect = (eventOrValue: any) => {
    const value =
      typeof eventOrValue === "string"
        ? eventOrValue
        : eventOrValue.target.value;
    setSort(value);
  };
  const handleFilterChange = (eventOrValue: any) => {
    const value =
      typeof eventOrValue === "string"
        ? eventOrValue
        : eventOrValue.target.value;
    setFilter(value);
  };
  return (
    <div className="  md:overflow-x-auto relative w-full px-4 xl:px-10">
      <div className=" gap-4 min-w-full md:mt-4  flex-row justify-between items-center w-full  flex  ">
        <div className="flex justify-center items-center w-full  md:flex-1 md:justify-start">
          <SearchBar setSearch={setSearch} />
        </div>
        <div className="md:flex-1 justify-center hidden w-full md:flex md:justify-center">
          {" "}
          <Pagination
            defaultCurrent={meta?.page || page}
            total={meta?.total}
            onChange={onPageChange}
          />
        </div>
        <div className="w-full md:justify-end gap-4 flex md:flex-1">
          <Select
            variant="bordered"
            name="category"
            className="max-w-lg md:max-w-xs"
            defaultSelectedKeys={[""]}
            placeholder="Filter category"
            onChange={handleFilterChange}
            selectionMode="single"
          >
            <SelectItem value={""} key={""}>
              All
            </SelectItem>
            <>
              {categories &&
              categories.data.length > 0 &&
              !isGetCategoriesPending ? (
                categories.data.map((category: TCategoryData) => (
                  <SelectItem value={category._id} key={category._id}>
                    {category.title}
                  </SelectItem>
                ))
              ) : (
                <SelectItem key={"no-categories"} isDisabled>
                  No categories available
                </SelectItem>
              )}
            </>
          </Select>
          <Select
            variant="bordered"
            name="sort"
            className="max-w-lg md:max-w-xs"
            placeholder="Sort"
            onChange={handleSortSelect}
            selectionMode="single"
          >
            <SelectItem key={"-createdAt"} value={"-createdAt"}>
              Newest to Oldest
            </SelectItem>
            <SelectItem key={"createdAt"} value={"createdAt"}>
              Oldest to Newst
            </SelectItem>
            <SelectItem key={"price"} value={"price"}>
              Price Low to High
            </SelectItem>
            <SelectItem key={"-price"} value={"-price"}>
              Price High to Low
            </SelectItem>
            <SelectItem key={"stockQuantity"} value={"stockQuantity"}>
              Stock Low to High
            </SelectItem>
            <SelectItem key={"-stockQuantity"} value={"-stockQuantity"}>
              Stock High to Low
            </SelectItem>
          </Select>
        </div>
      </div>
      <table  className="table w-full  mt-4">
        {/* head */}
        <thead>
          <tr className="bg-[#262626] text-white text-center">
            <th>SL.</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto">
          {products?.map((product: TProduct, index: number) => (
            <ProductTableRow
              key={product._id}
              product={product}
              sl={
                meta && meta?.page > 1 ? meta.page * 10 + index + 1 : index + 1
              }
            />
          ))}
        </tbody>
      </table>
      {isLoading && (
        <div>
          <CircleLoader size={24} />
        </div>
      )}
      {products?.length === 0 && <div>No Data </div>}
    </div>
  );
};

export default ManageProduct;
