// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { HYDRATE } from "next-redux-wrapper";

// const base = "/bills/";

// export const bills = createApi({
//   reducerPath: "bills",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `https://crypto-fb427-default-rtdb.firebaseio.com/`,
//   }),
// //   extractRehydrationInfo(action, { reducerPath }) {
// //     if (action.type === HYDRATE) {
// //       return action.payload[reducerPath];
// //     }
// //   },
// //   keepUnusedDataFor: 0,
// //   endpoints: (builder) => ({
// //     getPayedBilles: builder.query<billsResponseType, number>({
// //       query: (AccountID) => ({
// //         url: `${base}main/payedBills/undefined/${AccountID}`,
// //       }),
// //     }),
// //   }),
// });

// export const {
//   //   useGetPayedBillesQuery,
//   //   useGetUnPayedBillesQuery,
//   util: { getRunningQueriesThunk, invalidateTags },
// } = bills;
