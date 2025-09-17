import { useState } from "react";
const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('sorvetes');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const categories = [
    { id: 'sorvetes', name: '🍦 Sorvetes', icon: '🍦' },
    { id: 'milkshakes', name: '🥤 Milkshakes', icon: '🥤' },
    { id: 'banana-splits', name: '🍌 Banana Splits', icon: '🍌' },
    { id: 'bolos-caneca', name: '☕ Bolos de Caneca', icon: '☕' },
    { id: 'petit-gateau', name: '🍮 Petit Gateau', icon: '🍮' },
    { id: 'especiais', name: '⭐ Especiais', icon: '⭐' }
  ];

  const menuItems = {
    sorvetes: [
      { id: 1, name: "Avelã Cremosa", description: "Nosso carro-chefe com avelãs selecionadas", price: 12.90 },
      { id: 2, name: "Chocolate Belga", description: "Chocolate belga premium com raspas", price: 11.90 },
      { id: 3, name: "Morango Silvestre", description: "Morango fresco com pedaços da fruta", price: 10.90 },
      { id: 4, name: "Baunilha Madagascar", description: "Baunilha natural de Madagascar", price: 10.90 },
      { id: 5, name: "Doce de Leite", description: "Doce de leite cremoso com flocos", price: 11.50 },
      { id: 6, name: "Limão Siciliano", description: "Refrescante limão siciliano", price: 10.50 }
    ],
    milkshakes: [
      { id: 7, name: "Chocolate", description: "Milkshake cremoso de chocolate belga", price: 18.90 },
      { id: 8, name: "Morango", description: "Milkshake de morango com frutas frescas", price: 17.90 },
      { id: 9, name: "Ovomaltine", description: "Milkshake de ovomaltine crocante", price: 19.90 },
      { id: 10, name: "Nutella", description: "Milkshake de nutella com avelã", price: 20.90 }
    ],
    'banana-splits': [
      { id: 11, name: "Clássico", description: "Banana, 3 bolas de sorvete, calda e chantilly", price: 24.90 },
      { id: 12, name: "Premium", description: "Banana, 4 bolas de sorvete premium, nuts", price: 29.90 },
      { id: 13, name: "Chocolate", description: "Banana com sorvetes de chocolate e calda", price: 26.90 }
    ],
    'bolos-caneca': [
      { id: 14, name: "Chocolate", description: "Bolo de chocolate fofinho na caneca", price: 16.90 },
      { id: 15, name: "Red Velvet", description: "Bolo red velvet com cream cheese", price: 18.90 },
      { id: 16, name: "Cenoura", description: "Bolo de cenoura com chocolate", price: 17.90 }
    ],
    'petit-gateau': [
      { id: 17, name: "Chocolate", description: "Bolinho de chocolate com reino derretido", price: 22.90 },
      { id: 18, name: "Doce de Leite", description: "Bolinho com recheio de doce de leite", price: 21.90 },
      { id: 19, name: "Red Velvet", description: "Bolinho red velvet com cream cheese", price: 23.90 }
    ],
    especiais: [
      { id: 20, name: "Casquinha Crocante", description: "Casquinha artesanal com chocolate", price: 15.90 },
      { id: 21, name: "Sundae Chocolate", description: "Taça com sorvete, chocolate e chantilly", price: 21.90 },
      { id: 22, name: "Brownie com Sorvete", description: "Brownie quente com bola de sorvete", price: 23.90 }
    ]
  };

  const addToCart = (item) => {
    setCart([...cart, { ...item, cartId: Date.now() + Math.random() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const placeOrder = () => {
    setOrderPlaced(true);
    setCart([]);
    setTimeout(() => {
      setOrderPlaced(false);
      setShowCart(false);
    }, 3000);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const itemCount = cart.length;

  return (
    <div className="menu">
      <div className="menu-header">
        <h2>Cardápio</h2>
        <button 
          className="cart-button"
          onClick={() => setShowCart(true)}
          disabled={itemCount === 0}
        >
          🛒 Carrinho ({itemCount})
        </button>
      </div>

      {/* Menu de Categorias */}
      <div className="categories-menu">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name.replace(/[^a-zA-Z\s]/g, '')}</span>
          </button>
        ))}
      </div>

      {/* Itens em Cards */}
      <div className="menu-content">
        <h3 className="category-title">{categories.find(cat => cat.id === activeCategory)?.name}</h3>
        
        <div className="items-grid">
          {menuItems[activeCategory]?.map((item) => (
            <div key={item.id} className="menu-item-card">
              <div className="card-content">
                <h4 className="item-name">{item.name}</h4>
                <p className="item-description">{item.description}</p>
                <div className="card-footer">
                  <span className="item-price">R$ {item.price.toFixed(2)}</span>
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => addToCart(item)}
                  >
                    Adicionar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Carrinho Modal */}
      {showCart && (
        <div className="cart-overlay">
          <div className="cart-modal">
            <div className="cart-header">
              <h3>🛒 Seu Carrinho</h3>
              <button className="close-btn" onClick={() => setShowCart(false)}>×</button>
            </div>

            <div className="cart-items">
              {cart.length === 0 ? (
                <p className="empty-cart">Seu carrinho está vazio</p>
              ) : (
                cart.map((item) => (
                  <div key={item.cartId} className="cart-item">
                    <div className="item-info">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                    </div>
                    <div className="item-controls">
                      <span className="item-price">R$ {item.price.toFixed(2)}</span>
                      <button 
                        className="remove-btn"
                        onClick={() => removeFromCart(item.cartId)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-total">
                  <strong>Total: R$ {total.toFixed(2)}</strong>
                </div>
                <button className="checkout-btn" onClick={placeOrder}>
                  Finalizar Pedido
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Confirmação */}
      {orderPlaced && (
        <div className="confirmation-overlay">
          <div className="confirmation-modal">
            <div className="confirmation-content">
              <h3>✅ Pedido Confirmado!</h3>
              <p>Seu pedido chegará em 30-45 minutos!</p>
              <p>Obrigado por escolher a Gelatos Avelãs!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;