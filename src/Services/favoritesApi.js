import { fakeBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase";
export const favoritesApi = createApi({
  reducerPath: "favoritesApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["favorite"],
  endpoints: (builder) => ({
    getFavorites: builder.query({
      async queryFn() {
        try {
          const favoriteRef = collection(db, "favorites");
          const querySnapshot = await getDocs(favoriteRef);
          let favorites = [];
          querySnapshot?.forEach((doc) => {
            favorites.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          return { data: favorites };
        } catch (err) {
          return { error: err };
        }
      },
      providesTags: ["favorite"],
    }),
    addFavorite: builder.mutation({
      async queryFn(data) {
        try {
          await addDoc(collection(db, "favorites"), data);
          return { data: "ok" };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["favorite"],
    }),
    deleteFavorite: builder.mutation({
      async queryFn(id) {
        try {
          await deleteDoc(doc(db, "favorites", id));
          return { data: "ok" };
        } catch (err) {
          return { error: err };
        }
      },
      invalidatesTags: ["favorite"],
    }),
  }),
});
export const {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
  useGetFavoritesQuery,
} = favoritesApi;
