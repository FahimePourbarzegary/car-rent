import { fakeBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getCars: builder.query({
      async queryFn() {
        try {
          const carRef = collection(db, "cars");
          const querySnapshot = await getDocs(carRef);
          let cars = [];
          querySnapshot?.forEach((doc) => {
            cars.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          return { data: cars };
        } catch (error) {
          return { error };
        }
      },
    }),
  }),
});
export const { useGetCarsQuery } = carsApi;
