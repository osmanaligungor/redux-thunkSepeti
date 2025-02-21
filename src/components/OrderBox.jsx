const OrderBox = ({ card }) => {
  // toplam ürün adedini hesapla
  const totalAmount = card.reduce((total, i) => total + i.amount, 0);

  // sepetteki ürünlerin toplam fiyatı
  const totalPrice = card.reduce((total, i) => total + i.price * i.amount, 0);
  return (
    <div className="p-5 rounded-md border border-zinc-200 h-fit">
      <h2 className="font-semibold text-lg">Sipariş Detayları</h2>

      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Ürün Adedi:</span>
        <span className="text-lg font-bold text-red-500">{totalAmount}</span>
      </p>
      <p className="flex items-center gap-2 my-4">
        <span className="text-gray-600">Toplam Fiyat:</span>
        <span className="text-lg font-bold text-red-500">
          {totalPrice.toFixed(2)}$
        </span>
      </p>

      <button className="bg-red-500 p-1 px-3 rounded-md text-white transition hover:bg-red-400 cursor-pointer">
        Siparişi Onayla
      </button>
    </div>
  );
};

export default OrderBox;
