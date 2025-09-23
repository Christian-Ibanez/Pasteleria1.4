// Cargar productos desde localStorage o usar los datos iniciales
const products = JSON.parse(localStorage.getItem('products')) || [
    { code: 'TCC001', category: 'Tortas Cuadradas', name: 'Torta Cuadrada de Chocolate', price: 450000, desc: 'Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.', img: 'img/chocolatenuevo.jpg' },
    { code: 'TCC002', category: 'Tortas Cuadradas', name: 'Torta Cuadrada de Frutas', price: 500000, desc: 'Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.', img: 'img/frutasnuevo.jpg' },
    { code: 'TTC001', category: 'Tortas Circulares', name: 'Torta Circular de Vainilla', price: 400000, desc: 'Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.', img: 'img/vainillanuevo.jpg' },
    { code: 'TTC002', category: 'Tortas Circulares', name: 'Torta Circular de Manjar', price: 420000, desc: 'Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.', img: 'img/manjarnuevo.jpg' },
    { code: 'PI001', category: 'Postres Individuales', name: 'Mousse de Chocolate', price: 5000, desc: 'Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.', img: 'img/mousechocolate.jpg' },
    { code: 'PI002', category: 'Postres Individuales', name: 'Tiramisú Clásico', price: 5500, desc: 'Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.', img: 'img/tiramisu.jpg' },
    { code: 'PSA001', category: 'Productos Sin Azúcar', name: 'Torta Sin Azúcar de Naranja', price: 470000, desc: 'Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.', img: 'img/naranja.jpg' },
    { code: 'PSA002', category: 'Productos Sin Azúcar', name: 'Cheesecake Sin Azúcar', price: 480000, desc: 'Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.', img: 'img/cheesecake.jpg' },
    { code: 'PTO01', category: 'Pastelería Tradicional', name: 'Empanada de Manzana', price: 3000, desc: 'Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.', img: 'img/empanadamanzana.jpg' },
    { code: 'PTO02', category: 'Pastelería Tradicional', name: 'Tarta de Santiago', price: 6000, desc: 'Tradicional tarta española hecha con almendras, azúcar y huevos, una delicia para los amantes de los postres clásicos.', img: 'img/tartasantiago.jpg' },
    { code: 'PG001', category: 'Productos Sin Gluten', name: 'Brownie Sin Gluten', price: 4000, desc: 'Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.', img: 'img/Brownie.jpg' },
    { code: 'PG002', category: 'Productos Sin Gluten', name: 'Pan Sin Gluten', price: 3500, desc: 'Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.', img: 'img/pansingluten.jpg' },
    { code: 'PV001', category: 'Productos Vegana', name: 'Torta Vegana de Chocolate', price: 500000, desc: 'Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.', img: 'img/tortavegchoc.jpg' },
    { code: 'PV002', category: 'Productos Vegana', name: 'Galletas Veganas de Avena', price: 4500, desc: 'Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.', img: 'img/galletasveganas.jpg' },
    { code: 'TE001', category: 'Tortas Especiales', name: 'Torta Especial de Cumpleaños', price: 550000, desc: 'Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.', img: 'img/cumple.jpg' },
    { code: 'TE002', category: 'Tortas Especiales', name: 'Torta Especial de Boda', price: 600000, desc: 'Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.', img: 'img/casamiento.jpg' }
];

// Datos de las recetas
const recipes = [
    {
        name: 'Torta de Chocolate',
        image: 'img/chocolatenuevo.jpg',
        description: 'Prepara una deliciosa torta con chocolate amargo, manteca, azúcar y huevos. Una receta clásica y sencilla para los amantes del chocolate.',
        content: '<h5>Ingredientes:</h5><ul><li>200g de chocolate amargo</li><li>150g de manteca</li><li>200g de azúcar</li><li>4 huevos</li><li>150g de harina</li><li>1 cucharadita de polvo de hornear</li><li>1 pizca de sal</li></ul><h5>Preparación:</h5><ol><li>Derretir el chocolate y la manteca juntos.</li><li>Batir los huevos con el azúcar hasta obtener una mezcla espumosa.</li><li>Añadir el chocolate derretido a la mezcla de huevos y azúcar.</li><li>Incorporar la harina, polvo de hornear y sal. Mezclar bien.</li><li>Verter la mezcla en un molde enmantecado y enharinado.</li><li>Hornear a 180°C por 25-30 minutos.</li></ol>'
    },
    {
        name: 'Torta de Frutas',
        image: 'img/frutasnuevo.jpg',
        description: 'Una mezcla de frutas secas remojadas en jugo de naranja, combinadas con harina, huevos y aceite. Un bizcocho jugoso y lleno de sabor.',
        content: '<h5>Ingredientes:</h5><ul><li>2 tazas de frutas secas (pasas, higos, ciruelas, etc.)</li><li>1 taza de azúcar</li><li>1 taza de jugo de naranja</li><li>3 tazas de harina</li><li>1 cucharadita de polvo de hornear</li><li>1/2 taza de aceite</li><li>2 huevos</li><li>1 cucharadita de esencia de vainilla</li></ul><h5>Preparación:</h5><ol><li>Remojar las frutas secas con el jugo de naranja durante una hora.</li><li>Batir los huevos con el azúcar, añadir el aceite y la esencia de vainilla.</li><li>Incorporar las frutas remojadas y luego la harina con el polvo de hornear.</li><li>Verter la mezcla en un molde enmantecado.</li><li>Hornear a 180°C durante 40-45 minutos.</li></ol>'
    },
    {
        name: 'Torta de Vainilla',
        image: 'img/vainillanuevo.jpg',
        description: 'La receta básica de una torta de vainilla. Perfecta para decorar con diferentes glaseados o simplemente disfrutarla sola.',
        content: '<h5>Ingredientes:</h5><ul><li>200g de manteca</li><li>200g de azúcar</li><li>4 huevos</li><li>200g de harina</li><li>1 cucharadita de polvo de hornear</li><li>1 cucharadita de esencia de vainilla</li></ul><h5>Preparación:</h5><ol><li>Batir la manteca con el azúcar hasta que se forme una crema.</li><li>Agregar los huevos de a uno, batiendo bien después de cada adición.</li><li>Incorporar la esencia de vainilla y mezclar.</li><li>Tamizar la harina y el polvo de hornear. Añadir a la mezcla en tres partes.</li><li>Verter en un molde enmantecado y enharinado.</li><li>Hornear a 180°C durante 35-40 minutos.</li></ol>'
    },
    {
        name: 'Torta de Dulce de Leche',
        image: 'img/manjarnuevo.jpg',
        description: 'Una versión dulce y cremosa de la torta tradicional, con dulce de leche en la mezcla para un sabor irresistible.',
        content: '<h5>Ingredientes:</h5><ul><li>200g de manteca</li><li>200g de azúcar</li><li>4 huevos</li><li>250g de harina</li><li>1 cucharadita de polvo de hornear</li><li>300g de dulce de leche</li></ul><h5>Preparación:</h5><ol><li>Batir la manteca con el azúcar hasta obtener una mezcla cremosa.</li><li>Agregar los huevos, uno a uno, y luego el dulce de leche.</li><li>Tamizar la harina y el polvo de hornear y agregar a la mezcla.</li><li>Verter en un molde enmantecado.</li><li>Hornear a 180°C durante 30-35 minutos.</li></ol>'
    },
    {
        name: 'Mousse de Chocolate',
        image: 'img/mousechocolate.jpg',
        description: 'Un postre ligero y aireado con chocolate derretido y claras de huevo batidas. Perfecto para un final elegante.',
        content: '<h5>Ingredientes:</h5><ul><li>200g de chocolate amargo</li><li>200ml de crema de leche</li><li>4 claras de huevo</li><li>2 cucharadas de azúcar</li></ul><h5>Preparación:</h5><ol><li>Derretir el chocolate a baño maría.</li><li>Batir la crema de leche hasta que forme picos suaves.</li><li>Batir las claras con el azúcar hasta que estén bien firmes.</li><li>Mezclar el chocolate derretido con la crema batida.</li><li>Incorporar las claras a la mezcla con movimientos envolventes.</li><li>Refrigerar durante 2-3 horas antes de servir.</li></ol>'
    },
    {
        name: 'Tiramisú Clásico',
        image: 'img/tiramisu.jpg',
        description: 'El postre italiano por excelencia. Capas de bizcochos de soletilla empapados en café, alternadas con una crema de mascarpone.',
        content: '<h5>Ingredientes:</h5><ul><li>500g de queso mascarpone</li><li>250ml de crema de leche</li><li>5 yemas de huevo</li><li>100g de azúcar</li><li>1 taza de café fuerte</li><li>1 paquete de bizcochos de soletilla</li><li>Cacao en polvo para espolvorear</li></ul><h5>Preparación:</h5><ol><li>Batir las yemas con el azúcar hasta que estén claras y espumosas.</li><li>Añadir el mascarpone y batir hasta que quede suave.</li><li>Batir la crema de leche hasta que forme picos suaves e incorporar a la mezcla.</li><li>Mojar los bizcochos en el café y colocar una capa en el fondo de un molde.</li><li>Cubrir con una capa de la mezcla de mascarpone y repetir el proceso.</li><li>Refrigerar por al menos 4 horas y espolvorear cacao antes de servir.</li></ol>'
    },
    {
        name: 'Cheesecake',
        image: 'img/cheesecake.jpg',
        description: 'Una cremosa torta de queso con base de galletas. Un postre clásico y muy popular en todo el mundo.',
        content: '<h5>Ingredientes:</h5><ul><li>300g de galletas Digestive</li><li>100g de manteca</li><li>500g de queso crema</li><li>200ml de crema de leche</li><li>150g de azúcar</li><li>3 huevos</li><li>1 cucharadita de esencia de vainilla</li></ul><h5>Preparación:</h5><ol><li>Triturar las galletas y mezclarlas con la manteca derretida.</li><li>Presionar la mezcla en el fondo de un molde.</li><li>Batir el queso crema con la crema de leche, azúcar, huevos y vainilla.</li><li>Verter la mezcla sobre la base de galletas.</li><li>Hornear a 160°C durante 45-50 minutos.</li><li>Refrigerar por al menos 4 horas antes de servir.</li></ol>'
    },
    {
        name: 'Empanada de Manzana',
        image: 'img/empanadamanzana.jpg',
        description: 'Una versión dulce de la empanada, rellena con una mezcla de manzanas, canela y azúcar. Ideal para un postre o merienda.',
        content: '<h5>Ingredientes:</h5><ul><li>2 manzanas</li><li>100g de azúcar</li><li>1 cucharadita de canela</li><li>1 paquete de masa para empanadas</li><li>1 huevo (para pincelar)</li></ul><h5>Preparación:</h5><ol><li>Pelar y cortar las manzanas en cubos pequeños.</li><li>Cocinar las manzanas con el azúcar y la canela hasta que estén blandas.</li><li>Rellenar las tapas de empanada con la mezcla de manzana.</li><li>Cerrar las empanadas y pincelarlas con el huevo batido.</li><li>Hornear a 180°C durante 20-25 minutos.</li></ol>'
    },
    {
        name: 'Brownie',
        image: 'img/Brownie.jpg',
        description: 'Un pastel de chocolate denso y fudgy, perfecto para acompañar con helado o crema batida.',
        content: '<h5>Ingredientes:</h5><ul><li>200g de chocolate amargo</li><li>150g de manteca</li><li>200g de azúcar</li><li>3 huevos</li><li>100g de harina</li><li>1/2 cucharadita de esencia de vainilla</li></ul><h5>Preparación:</h5><ol><li>Derretir el chocolate y la manteca.</li><li>Batir los huevos con el azúcar hasta que estén espumosos.</li><li>Agregar la mezcla de chocolate y la esencia de vainilla.</li><li>Incorporar la harina y mezclar.</li><li>Verter en un molde enmantecado y enharinado.</li><li>Hornear a 180°C durante 20-25 minutos.</li></ol>'
    },
    {
        name: 'Pan Sin Gluten',
        image: 'img/pansingluten.jpg',
        description: 'Una receta especial para un pan suave y esponjoso, ideal para aquellos con sensibilidad al gluten.',
        content: '<h5>Ingredientes:</h5><ul><li>500g de harina sin gluten</li><li>10g de levadura seca</li><li>300ml de agua tibia</li><li>2 cucharadas de aceite de oliva</li><li>1 cucharadita de sal</li><li>1 cucharada de azúcar</li></ul><h5>Preparación:</h5><ol><li>Disolver la levadura y el azúcar en el agua tibia y dejar reposar durante 10 minutos.</li><li>Mezclar la harina sin gluten con la sal.</li><li>Añadir el agua con la levadura y el aceite, mezclar hasta obtener una masa suave.</li><li>Amasar durante 5-7 minutos.</li><li>Dejar reposar la masa durante 1 hora para que fermente.</li><li>Hornear a 200°C durante 30-35 minutos.</li></ol>'
    }
];

// Función para cargar productos en productos.html
function loadProducts() {
    const productList = document.getElementById('productList');
    if (productList) {
        const currentProducts = JSON.parse(localStorage.getItem('products')) || products;
        productList.innerHTML = '';
        
        currentProducts.forEach(product => {
            const isSquare = product.category.includes('Cuadradas');
            const isCircular = product.category.includes('Circulares');
            const card = `
                <div class="col-md-4 mb-4 product-card" data-type="${isSquare ? 'cuadradas' : isCircular ? 'circulares' : ''}">
                    <div class="card">
                        <img src="${product.img}" class="card-img-top" alt="${product.name}">
                        <div class="card-body">
                            <h5 class="card-title">${product.name}</h5>
                            <p class="card-text secondary-text">${product.desc}</p>
                            <p class="card-text">$${product.price.toLocaleString('es-CL')} CLP</p>
                            <div class="mb-2">
                                <label for="message-${product.code}" class="form-label small">Mensaje personalizado:</label>
                                <input type="text" class="form-control message-input" id="message-${product.code}" 
                                       placeholder="Ej: ¡Feliz Cumpleaños!" data-product-code="${product.code}">
                            </div>
                            <button class="btn btn-primary" onclick="addToCart('${product.code}')">Agregar al Carrito</button>
                            <button class="btn btn-secondary" onclick="shareProduct('${product.name}')">Compartir</button>
                        </div>
                    </div>
                </div>
            `;
            productList.innerHTML += card;
        });
    }
}

// Lógica para mostrar las recetas en blog.html
function renderRecipes() {
    const recipesGrid = document.getElementById('recipesGrid');
    if (!recipesGrid) return;
    
    recipesGrid.innerHTML = '';
    recipes.forEach(recipe => {
        const card = `
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm recipe-card" style="cursor: pointer;" onclick="showRecipeModal('${recipe.name}')">
                    <img src="${recipe.image}" class="card-img-top" alt="${recipe.name}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${recipe.name}</h5>
                        <p class="card-text">${recipe.description}</p>
                    </div>
                </div>
            </div>
        `;
        recipesGrid.innerHTML += card;
    });
}

// Muestra el modal de la receta seleccionada
function showRecipeModal(recipeName) {
    const recipe = recipes.find(r => r.name === recipeName);
    if (recipe) {
        document.getElementById('recipeModalLabel').textContent = recipe.name;
        document.getElementById('recipeModalContent').innerHTML = recipe.content;
        const recipeModal = new bootstrap.Modal(document.getElementById('recipeModal'));
        recipeModal.show();
    }
}


// Lógica para mostrar la lista de productos en el panel de administrador
function renderAdminProducts() {
    const tableBody = document.getElementById('productsTableBody');
    if (!tableBody) return;

    const currentProducts = JSON.parse(localStorage.getItem('products')) || products;
    tableBody.innerHTML = '';

    currentProducts.forEach(product => {
        const row = `
            <tr>
                <td>${product.code}</td>
                <td>${product.name}</td>
                <td>${product.category}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="showDeleteConfirm('${product.code}')">Eliminar</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Muestra u oculta las secciones del dashboard
function showSection(sectionId) {
    const sections = ['addProductsSection', 'manageProductsSection'];
    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.add('d-none');
        }
    });
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.remove('d-none');
    }

    // Actualiza la clase 'active' del menú
    const navLinks = document.querySelectorAll('#sidebar-wrapper .list-group-item');
    navLinks.forEach(link => link.classList.remove('active'));
    
    if (sectionId === 'addProductsSection') {
        document.getElementById('addProductsLink').classList.add('active');
    } else if (sectionId === 'manageProductsSection') {
        document.getElementById('manageProductsLink').classList.add('active');
        renderAdminProducts();
    }
}


// Muestra el modal de confirmación antes de eliminar
let productToDelete = null;

function showDeleteConfirm(code) {
    productToDelete = code;
    const confirmModal = new bootstrap.Modal(document.getElementById('deleteConfirmModal'));
    confirmModal.show();
}

// Lógica para eliminar un producto
function deleteProduct() {
    if (!productToDelete) return;

    let currentProducts = JSON.parse(localStorage.getItem('products')) || products;
    const updatedProducts = currentProducts.filter(p => p.code !== productToDelete);
    
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    
    // Actualizar la vista en el dashboard
    renderAdminProducts();
    
    // Ocultar el modal de confirmación
    const confirmModal = bootstrap.Modal.getInstance(document.getElementById('deleteConfirmModal'));
    if (confirmModal) {
        confirmModal.hide();
    }
    
    productToDelete = null; // Limpiar la variable
}

// Filtro y búsqueda
function filterProducts() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const type = document.getElementById('filterType').value;
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const name = card.querySelector('.card-title').textContent.toLowerCase();
        const cardType = card.dataset.type;
        if ((search === '' || name.includes(search)) && (type === '' || cardType === type)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Carrito (usando localStorage)
function addToCart(code) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.code === code);
    
    // Obtener el mensaje personalizado del input correspondiente
    const messageInput = document.getElementById(`message-${code}`);
    const customMessage = messageInput ? messageInput.value.trim() : '';
    
    // Crear objeto del producto con mensaje personalizado
    const productWithMessage = {
        ...product,
        customMessage: customMessage,
        timestamp: Date.now() // ID único para cada item del carrito
    };
    
    cart.push(productWithMessage);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Limpiar el mensaje después de agregar al carrito
    if (messageInput) {
        messageInput.value = '';
    }
    
    showCartToast(product);
    updateCartCounter();
}

function updateCartCounter() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalItems = 0;
    
    cart.forEach(item => {
        totalItems += item.quantity || 1;
    });
    let cartBadge = document.querySelector('a[href="carrito.html"] .cart-badge');
    if (!cartBadge) {
        cartBadge = document.createElement('span');
        cartBadge.className = 'cart-badge badge bg-danger rounded-pill ms-1';
        document.querySelector('a[href="carrito.html"]').appendChild(cartBadge);
    }
    
    if (totalItems > 0) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = 'inline-block';
    } else {
        cartBadge.style.display = 'none';
    }
}

function showCartToast(product) {
    // Actualizar la información del toast
    document.getElementById('toastProductImage').src = product.img;
    document.getElementById('toastProductName').textContent = product.name;
    document.getElementById('toastProductPrice').textContent = `$${product.price.toLocaleString('es-CL')} CLP`;
    
    // Mostrar el toast
    const cartToast = new bootstrap.Toast(document.getElementById('cartToast'));
    cartToast.show();
}

// Compartir
function shareProduct(name) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`¡Mira esta deliciosa ${name} de Pastelería Mil Sabores!`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
}

// Volver al perfil
function goToProfile() {
    window.location.href = 'perfil.html';
}

function redirectToProfile() {
    window.location.href = 'perfil.html';
}

// Lógica para el formulario de administración y carga de datos iniciales
document.addEventListener('DOMContentLoaded', () => {
    const addProductForm = document.getElementById('addProductForm');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');
    const addProductsLink = document.getElementById('addProductsLink');
    const manageProductsLink = document.getElementById('manageProductsLink');

    if (addProductForm) {
        addProductForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const productCode = document.getElementById('productCode').value;
            const productName = document.getElementById('productName').value;
            const productDesc = document.getElementById('productDesc').value;
            const productPrice = parseFloat(document.getElementById('productPrice').value);
            const productImage = document.getElementById('productImage').value;
            const productCategory = document.getElementById('productCategory').value;

            const newProduct = {
                code: productCode,
                category: productCategory,
                name: productName,
                price: productPrice,
                desc: productDesc,
                img: productImage
            };
            
            let updatedProducts = JSON.parse(localStorage.getItem('products')) || products;
            updatedProducts.push(newProduct);
            localStorage.setItem('products', JSON.stringify(updatedProducts));
            
            const successModal = new bootstrap.Modal(document.getElementById('successModal'));
            successModal.show();
            
            addProductForm.reset();
            renderAdminProducts(); // Actualiza la tabla de productos
        });
    }

    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', deleteProduct);
    }
    
    if (addProductsLink) {
        addProductsLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('addProductsSection');
        });
    }
    
    if (manageProductsLink) {
        manageProductsLink.addEventListener('click', (e) => {
            e.preventDefault();
            showSection('manageProductsSection');
        });
    }

    // Carga los productos en la vista del administrador
    renderAdminProducts();
    // Carga las recetas en la página de blog
    renderRecipes();

    // Lógica para cargar los productos en la página de productos
    loadProducts();
});

function authenticateUser(email, password) {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    
    if (!storedUser) {
        return false;
    }
    
    // Verificar email
    if (storedUser.email !== email) {
        return false;
    }
    
    // Verificar contraseña
    // Para usuarios antiguos que no tienen contraseña, usar una por defecto
    if (!storedUser.password) {
        // Asignar contraseña por defecto a usuarios antiguos
        storedUser.password = '123456';
        localStorage.setItem('user', JSON.stringify(storedUser));
    }
    
    return storedUser.password === password;
}