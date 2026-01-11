export function ShoppingCart() {
  return (
    <>
      <div className="cartLayout">
        <div className="cart-template">
          <h2>Seu carrinho</h2>
        </div>
        <div className="cart-resume">
          <h2>Resumo da compra</h2>
          <div className="cart-values">
            <p>Produtos</p>
            <span>23.99</span>
          </div>
          <div className="cart-values">
            <p>Frete</p>
            <span>23.99</span>
          </div>
          <div className="cart-values">
            <p>Subtotal</p>
            <span>23.99</span>
          </div>
          <button>Confirmar Compra</button>
        </div>
      </div>
    </>
  );
}
