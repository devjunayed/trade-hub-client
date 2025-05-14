/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { TCategoryData, TProduct } from "@/types";
import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { getProducts } from "@/actions/getProducts";
import { Pagination } from "antd";
import { PaginationProps, Select, SelectItem } from "@heroui/react";
import { useGetAllCategory } from "@/hooks/category.hook";
import BreadCrumb from "./components/BreadCrumb";
import SearchBar from "@/app/(dashboardLayout)/admin-dashboard/(products)/components/SearchBar";
import ProductCard from "../../components/ProductCard/ProductCard";

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

    if (products && products?.length >= 0) {
      setIsLoading(false);
    }
  }, [search, page, sort, filter, products]);

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
    setSort("");
    setSearch("");
    setPage(1);
    setFilter(value);
  };
  return (
    <div className="overflow-x-auto  max-w-7xl mx-auto px-6">
      <BreadCrumb labels={["products"]} activePath={"/products"} />

      <div className=" h-full w-full">
        <div className=" mb-8 gap-4 justify-between items-center w-full  flex top-0 left-0">
          <div className="flex  flex-1 justify-start">
            <SearchBar setSearch={setSearch} />
          </div>

          <div className="justify-end gap-4 flex flex-1">
            <Select
              variant="bordered"
              name="category"
              className="max-w-xs"
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
                categories?.data?.length > 0 &&
                !isGetCategoriesPending ? (
                  categories?.data?.map((category: TCategoryData) => (
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

        <div className="grid grid-flow-row-dense  grid-cols-5 h-full w-full gap-4">
          {products?.map((product: TProduct) => (
            <ProductCard height="300px" key={product._id} product={product} />
          ))}
        </div>
        {isLoading && (
          <div className="flex items-center justify-center h-full w-full">
            <CircleLoader size={24} />
          </div>
        )}
        {products && products.length === 0 && <div className="flex items-center justify-center min-h-[20vh]">No Products Found</div>}
        <div className="w-full flex justify-center my-10">
          {" "}
          <Pagination
            defaultCurrent={meta?.page || page}
            total={meta?.total}
            onChange={onPageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageProduct;
