/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { TCategoryData, TOrder } from "@/types";
import React, { useState } from "react";
import { Pagination } from "antd";
import { PaginationProps, Select, SelectItem } from "@heroui/react";
import { useGetAllCategory } from "@/hooks/category.hook";
import { useGetUserOrders } from "@/hooks/order.hook";
import OrderTableRow from "../components/OrderTableRow";
import SearchBar from "@/app/(dashboardLayout)/admin-dashboard/(products)/components/SearchBar";
import { CircleLoader } from "react-spinners";

export type TMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

const ManageOrders = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState<string>("");
  const [sort, setSort] = useState<string>("");
  const [filter, setFilter] = useState<string>("");
  const { data: categories, isPending: isGetCategoriesPending } =
    useGetAllCategory();
  const { data: orders, isPending: isOrderPending } = useGetUserOrders({
    search,
    page,
    filter,
    sort,
  });



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
    <div className="md:overflow-x-auto relative w-full px-4 xl:px-10">
      <div className="gap-4 min-w-full md:mt-4 flex-col md:flex-row justify-between items-center w-full flex">
        <div className="flex justify-center items-center w-full md:flex-1 md:justify-start">
          <SearchBar setSearch={setSearch} />
        </div>
        <div className="md:flex-1 justify-center hidden w-full md:flex md:justify-center">
          {" "}
          {!isOrderPending && (
            <Pagination
              defaultCurrent={orders?.meta?.page || page}
              total={orders?.meta?.total}
              onChange={onPageChange}
            />
          )}
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
      <table className="hidden md:table w-full mt-4">
        {/* head */}
        <thead>
          <tr className="bg-[#262626] text-white text-center">
            <th>SL.</th>
            <th>Products</th>
            <th>Amount</th>
            <th>Payment Status</th>
            <th>Order Status</th>
            <th>Order Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="overflow-y-auto min-h-[60vh]">
          {orders?.data?.map((order: TOrder, index: number) => (
            <OrderTableRow
              key={order._id}
              order={order}
              sl={
                orders.meta && orders.meta?.page > 1
                  ? orders.meta.page * 10 + index + 1
                  : index + 1
              }
            />
          ))}
        </tbody>
      </table>
 

      {isOrderPending && (
        <div className="flex items-center justify-center h-full">
          <CircleLoader size={24} />
        </div>
      )}
      {orders?.meta.total === 0 && <div>No Data </div>}
    </div>
  );
};

export default ManageOrders;
