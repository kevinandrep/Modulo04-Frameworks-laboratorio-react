import { AppRouter } from "./router/app.router";
import { CartProvider } from "./core/cart.provider";

function App() {
  return (
    <>
      <CartProvider>
        <AppRouter></AppRouter>
      </CartProvider>
    </>
  );
}

export default App;
