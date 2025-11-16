// Variables globales
let products = [
    // --- SECCIÓN: HOMBRES ---
{
    id: 1,
    title: "Chaqueta de Gamuza Marrón",
    price: 25.99,
    description: "Una cazadora estilo racer o biker en color marrón camello y textura de gamuza.",
    category: "Hombres",
    image:  "https://i.postimg.cc/7hMzdd4R/chyuleoseu-meog-euleowassneunde-(1).jpg "
  },
  {
    id: 2,
    title: "Camisa Color Block de Pana",
    price: 11.52,
    description: "Camisa de manga corta de diseño dividido en dos colores (negro y beige claro), con bolsillo en el pecho.",
    category: "Hombres",
    image:"https://i.postimg.cc/Dy2Zg5j8/Hombres-Camisa-de-color-combinado-con-bolsillo.jpg"
  },
  {
    id: 3,
    title: "Conjunto de Camisa Negra y Pantalón Gris",
    price: 12.50,
    description: " Camisa negra de vestir con pantalón gris de corte recto y un cinturón de cuero marrón.",
    category: "Hombres",
    image: "https://i.postimg.cc/3JM5BwtJ/descarga-(2).jpg"
  },{
    id: 4,
    title: "Camisa de Manga Corta Terracota",
    price: 12.50,
    description: "Camisa de verano con cuello de solapa, botones frontales y una textura sutil..",
    category: "Hombres",
    image: "https://i.postimg.cc/5Nm7C9G3/Hombres-Camisa-de-cuello-con-solapa-con-boton-delantero.jpg"
  },{
    id: 5,
    title: "Shorts de Mezclilla Anchos:",
    price: 8.50,
    description: "Pantalones cortos vaqueros, de corte holgado y largo por encima de la rodilla, con un lavado azul claro vintage.",
    category: "Hombres",
    image: "https://i.postimg.cc/wjMDW9fj/Shorts-vaqueros-casuales-con-bolsillo-delantero-y-botones-para-hombres-estilo-clasico-americano-de.jpg"
  },{
    id: 6,
    title: "Pantalón Cargo de Mezclilla",
    price: 12.50,
    description: "Jeans cargo anchos, de estilo urbano o streetwear, con un lavado azul medio desgastado y grandes bolsillos laterales.",
    category: "Hombres",
    image: "https://i.postimg.cc/W10sckH1/Jeans-de-mezclilla-casuales-para-hombre-minimalistas-y-de-moda-para-uso-diario.jpg"
  },
  // --- SECCIÓN: Mujeres ---
  {
    id: 7,
    title: "Vestido negro de corte midi,",
    price: 10.50,
    description: "ajustado en la parte superior y con una falda acampanada que termina justo debajo de la rodilla.",
    category: "Mujeres",
    image: "https://i.postimg.cc/Y9tWckrT/descarga-(3).jpg" 
  },
  {
    id: 8,
    title: "Vestido Mini Ajustado con Estampado de Hibiscus:",
    price: 11.59,
    description: "Un vestido corto de tirantes delgados, con un corte ajustado al cuerpo.",
    category: "Mujeres",
    image: "https://i.postimg.cc/vmTm5Bmn/Vestido-camiseta-mini-mujer-con-estampado-floral-fruncido-y-torsion-delantera.jpg" 
  },
  {
    id: 9,
    title: "Vestido Mini con Estampado Floral Pequeño:",
    price: 12.50,
    description: "Un vestido corto y ligero con tirantes anudables.",
    category: "Mujeres",
    image: "https://i.postimg.cc/QCQNjKfn/Vestido-Ajustado-De-Tirantes-Con-Estampado-Floral-Para-Mujer.jpg"
  },{
    id: 10,
    title: "Vestido largo de fiesta o gala de color lavanda (lila claro)",
    price: 46.50,
    description: "Está confeccionado en una tela de satén o seda con mucho brillo. Se caracteriza por un corpiño fruncido y drapeado que estiliza la cintura y un escote de estilo cowl neck (drapeado y caído). La falda es fluida, de corte A, y tiene una abertura lateral (slight slit) que le añade movimiento y elegancia.",
    category: "Mujeres",
    image: "https://i.postimg.cc/wTRcQq7Z/descarga-(4).jpg"
  },{
    id: 11,
    title: "Vestido de gala largo en un tono azul cielo o celeste empolvado",
    price: 48.50,
    description: "Presenta un corpiño ajustado con escote en V y tirantes finos. Lo más destacado es su falda voluminosa de tul que cae en capas escalonadas, cubierta con detalles de brillo o glitter, dándole un aspecto de cuento de hadas.",
    category: "Mujeres",
    image: "https://i.postimg.cc/Pq54gBXr/descarga-(5).jpg"
  },{
    id: 12,
    title: "Vestido de gala largo y elegante en un tono rosa pálido o nude brillante.",
    price: 50.00,
    description: "Está hecho de tela de satén o seda que se amolda a la figura",
    category: "Mujeres",
    image: "https://i.postimg.cc/C1Hxb68d/descarga-(6).jpg"
  },
  // --- SECCIÓN: niños ---
  {
    id: 13,
    title: "Conjunto deportivo/casual para niño",
    price: 12.50,
    description: "Consiste en una playera tipo polo blanca con cuello, mangas y botones negros.",
    category: "Niños",
    image: "https://i.postimg.cc/j58GVH09/Klassnyj-kostum-dla-mal'cisek-Podojdet-na-progulku-v-sadik-ocen'-udobnyj-Razmery-1-2-(90)-2.jpg" 
  },
  {
    id: 14,
    title: "Conjunto deportivo/casual para niño",
    price: 12.50,
    description: "Este es un segundo artículo que quiero vender.",
    category: "Niños",
    image: "https://i.postimg.cc/R0JRCwHJ/Children-Costume-Dress-Girls-Princess-Dress-Elegant-Sleeveless-Dress-Girls-Birthday-Party-Dress.jpg"
  },
  


];
let cart = JSON.parse(localStorage.getItem('products')) || [];

// DOM Elements
const productsContainer = document.getElementById('productsContainer');
const productModal = new bootstrap.Modal(document.getElementById('productModal'));
const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
const paymentModal = new bootstrap.Modal(document.getElementById('paymentModal'));
const modalProductImage = document.getElementById('modalProductImage');
const modalProductName = document.getElementById('modalProductName');
const modalProductCategory = document.getElementById('modalProductCategory');
const modalProductDescription = document.getElementById('modalProductDescription');
const modalProductPrice = document.getElementById('modalProductPrice');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.getElementById('cartCount');
const addToCart = document.getElementById('addToCart');
const checkoutButton = document.getElementById('checkoutButton');
const confirmPayment = document.getElementById('confirmPayment');
const decreaseQuantity = document.getElementById('decreaseQuantity');
const increaseQuantity = document.getElementById('increaseQuantity');
const productQuantity = document.getElementById('productQuantity');



// Renderizar productos en cards
function renderProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'col-md-4 col-sm-6';
        card.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description.substring(0, 100)}...</p>
                    <p class="text-success fw-bold">$${product.price}</p>
                    <button class="btn btn-primary w-100 viewDetails" data-id="${product.id}">Ver más</button>
                </div>
            </div>
        `;
        productsContainer.appendChild(card);
    });

    // Eventos para botones "Ver más"
    document.querySelectorAll('.viewDetails').forEach(button => {
        button.addEventListener('click', () => {
            const productId = parseInt(button.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            showProductModal(product);
        });
    });
}

// Mostrar modal de producto
function showProductModal(product) {
    modalProductImage.src = product.image;
    modalProductName.textContent = product.title;
    modalProductCategory.textContent = product.category;
    modalProductDescription.textContent = product.description;
    modalProductPrice.textContent = `$${product.price}`;
    addToCart.setAttribute('data-id', product.id);
    productModal.show();
}

// Añadir al carrito
addToCart.addEventListener('click', () => {
    const productId = parseInt(addToCart.getAttribute('data-id'));
    const product = products.find(p => p.id === productId);
    const quantity = parseInt(productQuantity.value);

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    productModal.hide();
    showAlert('Producto añadido al carrito ✅');
});

// Actualizar carrito
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="flex-grow-1 ms-3">
                <h6>${item.title}</h6>
                <p>$${item.price} x ${item.quantity}</p>
            </div>
            <div>
                <button class="btn btn-sm btn-outline-danger removeItem" data-id="${item.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        cartItems.appendChild(itemElement);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);

    // Eventos para eliminar items
    document.querySelectorAll('.removeItem').forEach(button => {
        button.addEventListener('click', () => {
            const itemId = parseInt(button.getAttribute('data-id'));
            cart = cart.filter(item => item.id !== itemId);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
    });
}

// Controlar cantidad
decreaseQuantity.addEventListener('click', () => {
    let value = parseInt(productQuantity.value);
    if (value > 1) {
        productQuantity.value = value - 1;
    }
});

increaseQuantity.addEventListener('click', () => {
    productQuantity.value = parseInt(productQuantity.value) + 1;
});

// Ir a pagar
checkoutButton.addEventListener('click', () => {
    cartModal.hide();
    paymentModal.show();
});

// Confirmar pago y generar PDF
confirmPayment.addEventListener('click', () => {
    const fullName = document.getElementById('fullName').value;
    if (!fullName) {
        showAlert('Por favor, ingresa tu nombre completo', 'danger');
        return;
    }

    generatePDF(fullName);
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCart();
    paymentModal.hide();
    showAlert('¡Compra realizada con éxito! 🎉');
});

// Generar ticket PDF
function generatePDF(fullName) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [80, 200]
    });

    doc.setFont('courier', 'normal');
    doc.setFontSize(10);

    let y = 10;
    doc.text('ShopMaster', 10, y);
    y += 7;
    doc.text(`Cliente: ${fullName}`, 10, y);
    y += 7;
    doc.text(`Fecha: ${new Date().toLocaleString()}`, 10, y);
    y += 7;
    doc.text('------------------------------', 10, y);
    y += 5;

    cart.forEach(item => {
        doc.text(`${item.title} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`, 10, y);
        y += 7;
    });

    doc.text('------------------------------', 10, y);
    y += 5;
    doc.text(`TOTAL: $${cartTotal.textContent}`, 10, y);
    y += 10;
    doc.text('¡Gracias por tu compra!', 10, y);

    doc.save(`ticket_${new Date().getTime()}.pdf`);
}

// Alertas
function showAlert(message, type = 'success') {
    const alert = document.createElement('div');
    alert.className = `position-fixed top-0 end-0 p-3 alert alert-${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    setTimeout(() => alert.remove(), 3000);
}

// Inicializar
renderProducts();
updateCart();
