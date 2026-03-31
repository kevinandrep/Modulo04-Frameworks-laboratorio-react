import { OrderScene } from "./scenes/order.scene";
import { ProductsProvider } from "./core/context/products-context";

function App() {
  return (
    <>
      <ProductsProvider>
        <OrderScene></OrderScene>
      </ProductsProvider>
    </>
  );
}

export default App;

// 1577961499
