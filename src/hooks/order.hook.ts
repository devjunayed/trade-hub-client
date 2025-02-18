import { createOrder, getUserOrders } from "@/services/OrderService";
import { TMeta, TOrder } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useCreateOrder = () => {
  const queryClient = useQueryClient();
  return useMutation<unknown, Error, TOrder>({
    mutationKey: ["CREATE_ORDER"],
    mutationFn: async (cartData) => await createOrder(cartData),
    onSuccess: () => {
      toast.success("Order placed successfully", {
        position: "top-center",
      });

      queryClient.invalidateQueries({ queryKey: ["GET_ALL_ORDERS"] });
    },
    onError: (error) => {
      toast.error(error.message, {
        position: "top-center",
      });
    },
  });
};

// export const useGetAllOrder = ({
//   search,
//   page,
// }: {
//   search?: string;
//   page?: number;
// }) => {
//   return useQuery<TProduct[], Error, TProduct[]>({
//     queryKey: ["GET_ALL_PRODUCT"],
//     queryFn: async () => await getUserOrders(search, page),
//     staleTime: 0,
//   });
// };
export const useGetUserOrders = ({
  search,
  page,
  filter,
  sort,
}: {
  search?: string;
  filter?: string;
  sort?: string;
  page?: number;
}) => {
  return useQuery<
    { data: TOrder[], meta: TMeta },
    Error,
    { data: TOrder[], meta: TMeta }
  >({
    queryKey: ["GET_ALL_USER_ORDER"],
    queryFn: async () => await getUserOrders({ search, page, filter, sort }),
    staleTime: 0,
  });
};
