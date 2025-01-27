import { createProduct, deleteProduct, getAllProduct, getSingleProduct, updateProduct } from "@/services/ProductService";
import { TProduct } from "@/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";



  export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation<unknown, Error, TProduct>({
      mutationKey: ["CREATE_PRODUCT"],
      mutationFn: async (productData) => await createProduct(productData),
      onSuccess: () => {
        toast.success("Product created successfully", {
          position: "top-center",
        });
        queryClient.invalidateQueries({ queryKey: ["GET_ALL_PRODUCT"] });
      },
      onError: (error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      },
    });
  };
  export const useUpdateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation<
      unknown,
      Error,
      { productId: string; productData: TProduct }
    >({
      mutationKey: ["UPDATE_PRODUCT"],
      mutationFn: async ({ productId, productData }) =>
        await updateProduct(productId, productData),
      onSuccess: () => {
        toast.success("Product updated successfully", {
          position: "top-center",
        });
        queryClient.invalidateQueries({ queryKey: ["GET_ALL_PRODUCT"] });
      },
      onError: (error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      },
    });
  };
  
  export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation<unknown, Error, unknown>({
      mutationKey: ["DELETE_PRODUCT"],
      mutationFn: async (productId) =>
        await deleteProduct(productId as string),
      onSuccess: () => {
        toast.success("Product deleted successfully", {
          position: "top-center",
        });
        queryClient.invalidateQueries({ queryKey: ["GET_ALL_PRODUCT"] });
      },
      onError: (error) => {
        toast.error(error.message, {
          position: "top-center",
        });
      },
    });
  };
  
  export const useGetAllProduct = () => {
    return useQuery<TProduct[], Error, TProduct[]>({
      queryKey: ["GET_ALL_PRODUCT"],
      queryFn: async () => await getAllProduct(),
      staleTime: 0,
    });
  };
  
  
  export const useGetSingleProduct = (productId: string) => {
    return useQuery<unknown, Error, {data: TProduct[]}>({
      queryKey: ["GET_SINGLE_PRODUCT", productId],
      queryFn: async () => await getSingleProduct(productId),
      staleTime: 0,
    });
  };
  