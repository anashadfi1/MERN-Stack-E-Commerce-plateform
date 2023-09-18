import { PRODUCTS_URL } from "../constants/constants";
import { ApiSlice } from "./apiSlice";
export const productApiSlice = ApiSlice.injectEndpoint({
    endpoint: (builder)=>({
        getProducts: builder.query({
            query: ()=>({
                url: PRODUCTS_URL,
            }),
            keepUnusedFor: 5,
        })
    })
})
export const { useGetProductsQuery } = productApiSlice;