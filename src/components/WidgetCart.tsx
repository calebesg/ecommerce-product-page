import ItemCart from "./ItemCart";

export default function WidgetCart() {
  const items = [1];

  const renderContent = function () {
    return (
      <>
        <div className="px-6 my-6 max-h-24 h-auto overflow-y-scroll flex flex-col gap-4 scrollbar-thin scrollbar-thumb-grayish_blue-500 scrollbar-track-grayish_blue-100 dark:scrollbar-track-grayish_blue-700">
          <ItemCart />
        </div>

        <footer className="px-6 pb-8">
          <button className="bg-orange-500 text-white w-full font-bold rounded-xl h-14 hover:bg-orange-600 transition-colors">
            Checkout
          </button>
        </footer>
      </>
    );
  };

  return (
    <div className="bg-white dark:bg-grayish_blue-800 rounded-xl shadow-2xl w-full">
      <header className="border-b border-grayish_blue-400 dark:border-grayish_blue-700 p-6">
        <strong>Cart</strong>
      </header>

      {items.length > 0 ? (
        renderContent()
      ) : (
        <div className="h-44 flex items-center justify-center text-grayish_blue-500 font-bold text-sm">
          Your cart is empty.
        </div>
      )}
    </div>
  );
}
