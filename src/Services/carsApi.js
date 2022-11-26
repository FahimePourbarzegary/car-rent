import { fakeBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["car"],
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
        } catch (err) {
          return { error: err };
        }
      },
      providesTags: ["car"],
    }),
    getCar: builder.query({
      async queryFn(id) {
        try {
          const carRef = doc(db, "cars", id);
          const Snapshot = await getDoc(carRef);
          return { data: Snapshot.data() };
        } catch (err) {
          return { error: err };
        }
      },
      providesTags: ["car"],
    }),
    updatePaymentCar: builder.mutation({
      async queryFn({ id, paymentCarInf }) {
        try {
          await updateDoc(doc(db, "cars", id), { ...paymentCarInf });
          return { data: "ok" };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["car"],
    }),
  }),
});
export const { useGetCarsQuery, useGetCarQuery, useUpdatePaymentCarMutation } =
  carsApi;
