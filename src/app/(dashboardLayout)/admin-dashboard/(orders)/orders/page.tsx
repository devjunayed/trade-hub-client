/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { TCategoryData } from "@/types";
import React, { useEffect, useState } from "react";
import { CircleLoader } from "react-spinners";
import { Pagination } from "antd";
import { PaginationProps, Select, SelectItem } from "@heroui/react";
import { useGetAllCategory } from "@/hooks/category.hook";
import SearchBar from "../components/SearchBar";
import { useGetAllOrder } from "@/hooks/order.hook";
import OrderTableRowAdmin from "../components/OrderTableRowAdmin";

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
  const { data: categories, isPending: isGetCategoriesPending } =
    useGetAllCategory();

  const { data: orders, refetch } = useGetAllOrder({ search, page });

  useEffect(() => {
    setIsLoading(true);
    refetch();
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
    <div className="md:overflow-x-auto max-h-[80vh] overflow-y-auto relative w-full px-4 xl:px-10">
      <div className="gap-4 min-w-full md:mt-4 flex-col md:flex-row justify-between items-center w-full flex">
        <div className="flex justify-center items-center w-full md:flex-1 md:justify-start">
          <SearchBar setSearch={setSearch} />
        </div>
        <div className="md:flex-1 justify-center hidden w-full md:flex md:justify-center">
          {" "}
          <Pagination
            defaultCurrent={orders?.meta?.page || page}
            total={orders?.meta?.total}
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
            <SelectItem
              className="w-full"
              key={"-createdAt"}
              value={"-createdAt"}
            >
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
      <div className="max-w-screen overflow-x-auto md:max-h-screen max-h-[60vh] overscroll-y-auto">

      <table className="table w-full mt-4">
        {/* head */}
        <thead>
          <tr className="bg-[#262626] text-white text-center">
            <th>SL.</th>
            <th>Products</th>
            <th>TrxId</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Payment Status</th>
            <th>Order Status</th>
            <th>Order Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="">
          {orders?.data?.map((order: any, index: number) => (
            <OrderTableRowAdmin
              key={order._id}
              order={order}
              sl={
                orders.meta && orders.meta?.page > 1
                  ? (orders.meta.page - 1) * 10 + index + 1
                  : index + 1
              }
            />
          ))}
        </tbody>
      </table>
      </div>
      <div className="md:hidden overflow-y-auto w-full max-h-[60vh] mt-4 border">
        <div className="w-full my-6 pb-6 flex md:hidden justify-center">
          {" "}
          <Pagination
            defaultCurrent={orders?.meta?.page || page}
            total={orders?.meta?.total}
            onChange={onPageChange}
          />
        </div>
      </div>

      {isLoading && (
        <div>
          <CircleLoader size={24} />
        </div>
      )}
      {orders?.data?.length === 0 && <div>No Data </div>}
    </div>
  );
};

export default ManageProduct;
