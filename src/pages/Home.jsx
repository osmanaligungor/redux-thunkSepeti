import { useDispatch, useSelector } from "react-redux";
import Loader from "../components/Loader";
import Error from "../components/Error";
import { getRestaurants } from "../redux/actions/restActions";
import RestaurantCard from "../components/RestaurantCard";

const Home = () => {
  const { isLoading, error, restaurants } = useSelector(
    (store) => store.restaurantReducer
  );

  const dispatch = useDispatch();

  const retry = () => dispatch(getRestaurants());

  /* Burada kullanmak yerine app bileşeninde kullanacağım çünkü header'da sepete gidildiğinde yakınınzda ... restoran var yazmıyor.
  * const dispatch = useDispatch();

  # 1. Yöntem
  useEffect(() => {
    dispatch({
      type: Types.REST_LOADING,
    });
    axios
      .get("http://localhost:3000/restaurants")
      .then((res) => dispatch({ type: Types.REST_SUCCESS, payload: res.data }))
      .catch((err) => dispatch({ type: Types.REST_ERROR, payload: err }));
  }, []);
*/

  // # 2. Yöntem
  // useEffect(() => {
  //   dispatch(getRestaurants());
  // }, []);

  return (
    <div className="container">
      <h1 className="font-semibold text-lg md:text-xl lg:text-2xl">
        Yakınınızdaki Restoranlar
      </h1>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error info={error} retry={retry} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
          {restaurants.map((item) => (
            <RestaurantCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
