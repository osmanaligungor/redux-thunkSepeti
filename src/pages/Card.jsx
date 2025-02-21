import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import OrderBox from "../components/OrderBox";
import Loader from "../components/Loader";
import Error from "../components/Error";
import Warning from "../components/Warning";

const Card = () => {
  const { card, error, isLoading } = useSelector((store) => store.cardReducer);

  return (
    <div className="container">
      <h1 className="text-2xl font-bold mb-5">SEPET</h1>

      <div className="grid md:grid-cols-[1fr_300px] gap-4">
        <div>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Error info={error} />
          ) : card.length === 0 ? (
            <Warning />
          ) : (
            card.map((item) => <CartItem key={item.id} item={item} />)
          )}
        </div>
        <OrderBox card={card} />
      </div>
    </div>
  );
};

export default Card;
