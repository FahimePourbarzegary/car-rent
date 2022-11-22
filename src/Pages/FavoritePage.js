import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Catalogue from "../Components/Catalogue/Catalogue";
import { UserAuth } from "../Context/AuthContext";
import { useGetFavoritesQuery } from "../Services/favoritesApi";

const FavoritePage = () => {
  const { data, isLoading, isError, error } = useGetFavoritesQuery();
  const [filteredData, setFilteredData] = useState([]);
  const { user } = UserAuth();
  //when favoritepage loaded just show currentuser`sFavorites
  useEffect(() => {
    isError && toast.error(error);
    if (!isError && !error) {
      const favoriteDataUser = data?.filter((f) => f.uid === user.uid);

      setFilteredData(favoriteDataUser);
    }
  }, [isError, error, data, user]);
  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div>
      <section className="py-4">
        <p className=" pr-8  md:pr-18 font-semibold text-slate-600 text-base md:text-xl">
          خودرو های مورد علاقه
        </p>
        <div
          className=" w-full p-6 grid gap-5
        md:grid-cols-2 md:gap-8 xl:grid-cols-3"
        >
          {filteredData ? (
            filteredData?.map((item, index) => {
              return (
                <div key={index}>
                  <Catalogue
                    id={item.carid}
                    name={item.name}
                    capacity={item.capacity}
                    type={item.type}
                    gasoline={item.gasoline}
                    image={item.image}
                    steering={item.steering}
                    off={item.off}
                    price={item.price}
                  />
                </div>
              );
            })
          ) : (
            <p>موردی یافت نشد</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default FavoritePage;
