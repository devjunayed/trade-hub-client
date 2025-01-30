"use client";
import ProductTableRow from "@/app/(dashboardLayout)/admin-dashboard/(products)/components/ProductTableRow";
import { useGetAllProduct } from "@/hooks/product.hook";
import { TCategoryData, TProduct } from "@/types";
import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import { CircleLoader } from "react-spinners";
import { getProducts } from "@/actions/getProducts";
import { Dropdown, Pagination, Space } from "antd";
import { PaginationProps, Select, SelectItem } from "@heroui/react";
import { BiDownArrow } from "react-icons/bi";
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
  const [isLoading, setIsLoading] = useState(true);
  const [meta, setMeta] = useState<TMeta>();
  const [products, setProducts] = useState<TProduct[]>();
  const { data: categories, isPending: isGetCategoriesPending } =
    useGetAllCategory();

  useEffect(() => {
    setIsLoading(true);
    const handleGetProducts = async () => {
      const response = await getProducts(search, page, sort);
      console.log(response);
      setProducts(response.data);
      setMeta(response.meta);
    };
    handleGetProducts();
    setIsLoading(false);
  }, [search, page, sort]);

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
  return (
    <div className="overflow-x-auto relative w-full mx-10">
      <div className="absolute justify-between items-center w-full  flex top-0 left-0">
        <div className="flex  flex-1 justify-start">
          <SearchBar setSearch={setSearch} />
        </div>
        <div className="flex-1 flex justify-center">
          {" "}
          <Pagination
            defaultCurrent={meta?.page || page}
            total={meta?.total}
            onChange={onPageChange}
          />
        </div>
        <div className="justify-end gap-4 flex flex-1">
          <Select
            variant="bordered"
            name="category"
            className="max-w-xs"
            placeholder="Select a category"
            onChange={() => {}}
            selectionMode="single"
          >
            {categories &&
            categories.data.length > 0 &&
            !isGetCategoriesPending ? (
              categories.data.map((category: TCategoryData, index) => (
                <SelectItem value={category._id} key={category._id}>
                  {category.title}
                </SelectItem>
              ))
            ) : (
              <SelectItem key={"no-categories"} isDisabled>
                No categories available
              </SelectItem>
            )}
          </Select>
          <Select
            variant="bordered"
            name="sort"
            className="max-w-xs"
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
      <table className="table mt-12">
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
        <tbody>
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
