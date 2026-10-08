// Velvet & Co. - E-commerce Store Application JS
const API_BASE = '/api/v1';

// Initial Fallback Data in case API is launching
const fallbackCategories = [
  { id: 1, name: "Ayollar kolleksiyasi", slug: "women", imageUrl: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Erkaklar kolleksiyasi", slug: "men", imageUrl: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Ustki kiyimlar", slug: "outerwear", imageUrl: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Ko'ylaklar va Kostyumlar", slug: "dresses", imageUrl: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80" },
  { id: 5, name: "Oyoq kiyimlar", slug: "shoes", imageUrl: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=80" },
  { id: 6, name: "Aksessuarlar & Sumkalar", slug: "accessories", imageUrl: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80" }
];

const fallbackProducts = [
  {
    id: 1,
    name: "Klassik Bej Trençkot",
    slug: "classic-beige-trench-coat",
    description: "Yuqori sifatli gabardin matodan tikilgan, ikki qator tugmali klassik ayollar trençkoti.",
    price: 89.00,
    oldPrice: 129.00,
    discountPercent: 31,
    rating: 4.9,
    reviewCount: 48,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ustki kiyimlar", slug: "outerwear" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Bej", "Qora", "Xaki"]
  },
  {
    id: 2,
    name: "Oversize Kashmir Sviter",
    slug: "oversize-cashmere-sweater",
    description: "100% yumshoq tabiiy kashmir junidan to'qilgan qulay sviter.",
    price: 65.00,
    oldPrice: 85.00,
    discountPercent: 23,
    rating: 4.8,
    reviewCount: 36,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ayollar kolleksiyasi", slug: "women" },
    sizes: ["XS", "S", "M", "L"],
    colors: ["Krem", "Kulrang"]
  },
  {
    id: 3,
    name: "Erkaklar Italiya Fason Pidjagi",
    slug: "mens-wool-blazer",
    description: "Italiya andozasida tayyorlangan premium erkaklar kostyum-pidjagi.",
    price: 119.00,
    oldPrice: 160.00,
    discountPercent: 25,
    rating: 5.0,
    reviewCount: 29,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80",
    category: { name: "Erkaklar kolleksiyasi", slug: "men" },
    sizes: ["M", "L", "XL", "XXL"],
    colors: ["To'q ko'k", "Qora"]
  },
  {
    id: 4,
    name: "Gulli Ipak Kechki Ko'ylak",
    slug: "floral-silk-maxi-dress",
    description: "Yengil tabiiy ipak matodan tikilgan uzun gulli libos.",
    price: 79.00,
    oldPrice: 99.00,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 54,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ko'ylaklar va Kostyumlar", slug: "dresses" },
    sizes: ["S", "M", "L"],
    colors: ["Zangori", "Pushti"]
  },
  {
    id: 5,
    name: "Og'ir Paxtali Streetwear Xudi",
    slug: "streetwear-heavy-cotton-hoodie",
    description: "450 GSM zichlikdagi 100% paxta matosidan tayyorlangan premium xudi.",
    price: 49.00,
    oldPrice: 69.00,
    discountPercent: 29,
    rating: 4.8,
    reviewCount: 72,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=800&q=80",
    category: { name: "Erkaklar kolleksiyasi", slug: "men" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Qora", "Oq", "Zaytun yashil"]
  },
  {
    id: 6,
    name: "Tabiiy Charm Oq Krossovka",
    slug: "minimalist-white-leather-sneakers",
    description: "Toza minimalist uslubdagi charm krossovkalar.",
    price: 95.00,
    oldPrice: 130.00,
    discountPercent: 27,
    rating: 4.9,
    reviewCount: 88,
    isFeatured: true,
    isNewArrival: false,
    isBestSeller: true,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&w=800&q=80",
    category: { name: "Oyoq kiyimlar", slug: "shoes" },
    sizes: ["40", "41", "42", "43"],
    colors: ["Oq", "Qora"]
  },
  {
    id: 7,
    name: "Qo'lda Tikilgan Charm Sumka",
    slug: "handcrafted-leather-tote-bag",
    description: "Premium to'liq charm matodan tikilgan keng hajmli ayollar sumkasi.",
    price: 110.00,
    oldPrice: 150.00,
    discountPercent: 26,
    rating: 5.0,
    reviewCount: 41,
    isFeatured: true,
    isNewArrival: true,
    isBestSeller: false,
    isDeal: true,
    primaryImage: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    category: { name: "Aksessuarlar & Sumkalar", slug: "accessories" },
    sizes: ["Standard"],
    colors: ["Jigarrang", "Qora"]
  },
  {
    id: 8,
    name: "Vintaj Djinsi Kurtka",
    slug: "vintage-wash-denim-jacket",
    description: "Klassik 90-yillar uslubidagi djinsi kurtka.",
    price: 59.00,
    oldPrice: 79.00,
    discountPercent: 25,
    rating: 4.7,
    reviewCount: 63,
    isFeatured: false,
    isNewArrival: true,
    isBestSeller: false,
    isDeal: false,
    primaryImage: "https://images.unsplash.com/photo-1523205771623-e0faa4d2813d?auto=format&fit=crop&w=800&q=80",
    category: { name: "Ustki kiyimlar", slug: "outerwear" },
    sizes: ["S", "M", "L", "XL"],
    colors: ["Moviy"]
  }
];

// App State
let state = {
  products: [],
  categories: [],
  cart: JSON.parse(localStorage.getItem('velvet_cart')) || [],
  wishlist: JSON.parse(localStorage.getItem('velvet_wishlist')) || [],
  appliedCoupon: null,
  activeTab: 'all',
  activeCategory: null,
  searchQuery: '',
  selectedSize: null,
  selectedColor: null,
  minPrice: null,
  maxPrice: null,
  sortBy: 'featured'
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  initApp();
  initCountdown();
});

async function initApp() {
  updateCartBadge();
  updateWishlistBadge();
  await loadCategories();
  await loadProducts();
  setupEventListeners();
}

// Load Categories
async function loadCategories() {
  try {
    const res = await fetch(`${API_BASE}/categories`);
    if (res.ok) {
      state.categories = await res.json();
    } else {
      state.categories = fallbackCategories;
    }
  } catch (err) {
    state.categories = fallbackCategories;
  }
  renderCategories();
  renderCategoryFilterSidebar();
}

// Load Products
async function loadProducts() {
  try {
    let url = `${API_BASE}/products?sortBy=${state.sortBy}`;
    if (state.activeCategory) url += `&category=${state.activeCategory}`;
    if (state.searchQuery) url += `&q=${encodeURIComponent(state.searchQuery)}`;
    if (state.selectedSize) url += `&size=${state.selectedSize}`;
    if (state.selectedColor) url += `&color=${state.selectedColor}`;
    if (state.minPrice) url += `&minPrice=${state.minPrice}`;
    if (state.maxPrice) url += `&maxPrice=${state.maxPrice}`;

    const res = await fetch(url);
    if (res.ok) {
      state.products = await res.json();
    } else {
      state.products = filterLocalProducts();
    }
  } catch (err) {
    state.products = filterLocalProducts();
  }
  renderProducts();
  renderCatalogProducts();
}

function filterLocalProducts() {
  let list = [...fallbackProducts];
  if (state.activeCategory) {
    list = list.filter(p => p.category?.slug === state.activeCategory);
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }
  if (state.selectedSize) {
    list = list.filter(p => p.sizes?.includes(state.selectedSize));
  }
  if (state.selectedColor) {
    list = list.filter(p => p.colors?.includes(state.selectedColor));
  }
  if (state.minPrice) {
    list = list.filter(p => p.price >= parseFloat(state.minPrice));
  }
  if (state.maxPrice) {
    list = list.filter(p => p.price <= parseFloat(state.maxPrice));
  }
  if (state.activeTab === 'featured') {
    list = list.filter(p => p.isFeatured);
  } else if (state.activeTab === 'new') {
    list = list.filter(p => p.isNewArrival);
  } else if (state.activeTab === 'bestseller') {
    list = list.filter(p => p.isBestSeller);
  } else if (state.activeTab === 'deal') {
    list = list.filter(p => p.isDeal);
  }
  return list;
}

// Render Categories Grid
function renderCategories() {
  const container = document.getElementById('categoriesGrid');
  if (!container) return;

  container.innerHTML = state.categories.map(cat => `
    <div class="category-card" onclick="filterByCategory('${cat.slug}')">
      <img src="${cat.imageUrl}" alt="${cat.name}" loading="lazy">
      <div class="category-overlay">
        <h4>${cat.name}</h4>
        <span>Kolleksiyani ko'rish →</span>
      </div>
    </div>
  `).join('');
}

// Render Category Filter in Sidebar
function renderCategoryFilterSidebar() {
  const container = document.getElementById('categoryFilterList');
  if (!container) return;

  let html = `
    <li class="category-filter-item ${!state.activeCategory ? 'active' : ''}" onclick="filterByCategory(null)">
      <span>Barcha bo'limlar</span>
      <span>${fallbackProducts.length}</span>
    </li>
  `;

  html += state.categories.map(cat => `
    <li class="category-filter-item ${state.activeCategory === cat.slug ? 'active' : ''}" onclick="filterByCategory('${cat.slug}')">
      <span>${cat.name}</span>
      <span>→</span>
    </li>
  `).join('');

  container.innerHTML = html;
}

// Render Products Grid (Tabs Section)
function renderProducts() {
  const container = document.getElementById('trendingProductsGrid');
  if (!container) return;

  let displayProducts = state.products;
  if (state.activeTab === 'featured') {
    displayProducts = state.products.filter(p => p.isFeatured);
  } else if (state.activeTab === 'new') {
    displayProducts = state.products.filter(p => p.isNewArrival);
  } else if (state.activeTab === 'bestseller') {
    displayProducts = state.products.filter(p => p.isBestSeller);
  } else if (state.activeTab === 'deal') {
    displayProducts = state.products.filter(p => p.isDeal);
  }

  if (displayProducts.length === 0) {
    container.innerHTML = `<p style="grid-column: span 4; text-align: center; color: var(--text-muted); padding: 40px 0;">Hech qanday mahsulot topilmadi.</p>`;
    return;
  }

  container.innerHTML = displayProducts.map(p => createProductCardHtml(p)).join('');
}

// Render Catalog Products (Catalog Section)
function renderCatalogProducts() {
  const container = document.getElementById('catalogProductsGrid');
  const countEl = document.getElementById('catalogProductCount');
  if (!container) return;

  if (countEl) countEl.innerText = `${state.products.length} ta mahsulot topildi`;

  if (state.products.length === 0) {
    container.innerHTML = `<p style="grid-column: span 3; text-align: center; color: var(--text-muted); padding: 60px 0;">Mos keluvchi mahsulotlar mavjud emas.</p>`;
    return;
  }

  container.innerHTML = state.products.map(p => createProductCardHtml(p)).join('');
}

// Generate Product Card HTML
function createProductCardHtml(p) {
  const isWish = state.wishlist.includes(p.id);
  const badgeHtml = p.discountPercent ? `<span class="badge badge-sale">-${p.discountPercent}%</span>` :
                    p.isNewArrival ? `<span class="badge badge-new">Yangi</span>` :
                    p.isBestSeller ? `<span class="badge badge-hot">Top</span>` : '';

  return `
    <div class="product-card">
      <div class="product-thumb-wrap">
        <div class="product-badge-wrap">
          ${badgeHtml}
        </div>
        <button class="product-wishlist-btn ${isWish ? 'active' : ''}" onclick="toggleWishlist(${p.id})">
          <svg width="18" height="18" fill="${isWish ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
          </svg>
        </button>
        <img src="${p.primaryImage}" alt="${p.name}" loading="lazy">
        <button class="product-quick-view-btn" onclick="openQuickView(${p.id})">Tezkor ko'rish</button>
      </div>
      <div class="product-details">
        <span class="product-category-name">${p.category ? p.category.name : 'Libos'}</span>
        <h3 class="product-title">${p.name}</h3>
        <div class="product-rating">
          <div class="stars">★★★★★</div>
          <span class="rating-count">(${p.reviewCount || 12})</span>
        </div>
        <div class="product-footer">
          <div class="product-prices">
            <span class="price-current">$${p.price.toFixed(2)}</span>
            ${p.oldPrice ? `<span class="price-old">$${p.oldPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="btn-add-cart" onclick="quickAddToCart(${p.id})">
            <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;
}

// Cart Functionality
function quickAddToCart(productId) {
  const product = state.products.find(p => p.id === productId) || fallbackProducts.find(p => p.id === productId);
  if (!product) return;

  const defaultSize = product.sizes && product.sizes.length ? product.sizes[0] : 'Standard';
  const defaultColor = product.colors && product.colors.length ? product.colors[0] : 'Klassik';

  addToCart(product, defaultSize, defaultColor, 1);
}

function addToCart(product, size, color, quantity = 1) {
  const existingIndex = state.cart.findIndex(
    item => item.productId === product.id && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      productId: product.id,
      productName: product.name,
      productImage: product.primaryImage,
      price: product.price,
      quantity: quantity,
      size: size,
      color: color
    });
  }

  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast(`"${product.name}" savatga qo'shildi!`, 'success');
  openDrawer('cartDrawer');
}

function updateCartQty(index, delta) {
  state.cart[index].quantity += delta;
  if (state.cart[index].quantity <= 0) {
    state.cart.splice(index, 1);
  }
  saveCart();
  updateCartBadge();
  renderCartDrawer();
}

function removeCartItem(index) {
  state.cart.splice(index, 1);
  saveCart();
  updateCartBadge();
  renderCartDrawer();
  showToast("Mahsulot savatdan o'chirildi.", 'info');
}

function saveCart() {
  localStorage.setItem('velvet_cart', JSON.stringify(state.cart));
}

function updateCartBadge() {
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const badge = document.getElementById('cartBadge');
  if (badge) badge.innerText = count;
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const discountEl = document.getElementById('cartDiscount');
  const shippingEl = document.getElementById('cartShipping');
  const totalEl = document.getElementById('cartTotal');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
        <p style="font-size: 16px; margin-bottom: 12px;">Savat hozircha bo'sh</p>
        <button class="btn btn-primary" onclick="closeAllModals(); scrollToShop();">Xarid qilishni boshlash</button>
      </div>
    `;
    if (subtotalEl) subtotalEl.innerText = '$0.00';
    if (discountEl) discountEl.innerText = '-$0.00';
    if (shippingEl) shippingEl.innerText = '$0.00';
    if (totalEl) totalEl.innerText = '$0.00';
    return;
  }

  container.innerHTML = state.cart.map((item, index) => `
    <div class="cart-item-row">
      <img src="${item.productImage}" alt="${item.productName}" class="cart-item-img">
      <div class="cart-item-info">
        <h4>${item.productName}</h4>
        <div class="cart-item-meta">O'lcham: ${item.size} | Rang: ${item.color}</div>
        <div class="cart-item-bottom">
          <div class="qty-control">
            <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
            <span class="qty-val">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
          </div>
          <span class="cart-item-price">$${(item.price * item.quantity).toFixed(2)}</span>
          <button class="cart-item-remove" onclick="removeCartItem(${index})">✕</button>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;
  if (state.appliedCoupon) {
    discount = (subtotal * state.appliedCoupon.discountPercent) / 100;
  }
  const shipping = subtotal >= 50 || subtotal === 0 ? 0 : 10;
  const total = Math.max(0, subtotal - discount + shipping);

  if (subtotalEl) subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  if (discountEl) discountEl.innerText = `-$${discount.toFixed(2)}`;
  if (shippingEl) shippingEl.innerText = shipping === 0 ? 'BEPUL' : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.innerText = `$${total.toFixed(2)}`;
}

// Coupon Validation
async function applyCoupon() {
  const input = document.getElementById('couponCodeInput');
  if (!input || !input.value.trim()) {
    showToast("Iltimos, kupon kodini kiriting!", 'error');
    return;
  }

  const code = input.value.trim().toUpperCase();
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  try {
    const res = await fetch(`${API_BASE}/coupons/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ code: code, orderAmount: subtotal })
    });

    if (res.ok) {
      const data = await res.json();
      if (data.valid) {
        state.appliedCoupon = { code: data.code, discountPercent: data.discountPercent, discountAmount: data.discountAmount };
        showToast(data.message, 'success');
        renderCartDrawer();
      } else {
        showToast(data.message, 'error');
      }
    } else {
      applyLocalCoupon(code, subtotal);
    }
  } catch (err) {
    applyLocalCoupon(code, subtotal);
  }
}

function applyLocalCoupon(code, subtotal) {
  if (code === 'WELCOME10') {
    state.appliedCoupon = { code: 'WELCOME10', discountPercent: 10 };
    showToast("Kupon muvaffaqiyatli qo'llandi! 10% chegirma berildi.", 'success');
  } else if (code === 'SPRING20') {
    state.appliedCoupon = { code: 'SPRING20', discountPercent: 20 };
    showToast("Kupon muvaffaqiyatli qo'llandi! 20% chegirma berildi.", 'success');
  } else if (code === 'VIP30') {
    state.appliedCoupon = { code: 'VIP30', discountPercent: 30 };
    showToast("Kupon muvaffaqiyatli qo'llandi! 30% chegirma berildi.", 'success');
  } else {
    showToast("Yaroqsiz kupon kodi!", 'error');
  }
  renderCartDrawer();
}

// Wishlist Functionality
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast("Istaklar ro'yxatidan olib tashlandi.", 'info');
  } else {
    state.wishlist.push(productId);
    showToast("Istaklar ro'yxatiga saqlandi! ❤️", 'success');
  }
  localStorage.setItem('velvet_wishlist', JSON.stringify(state.wishlist));
  updateWishlistBadge();
  renderProducts();
  renderCatalogProducts();
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (badge) badge.innerText = state.wishlist.length;
}

// Quick View Modal
function openQuickView(productId) {
  const product = state.products.find(p => p.id === productId) || fallbackProducts.find(p => p.id === productId);
  if (!product) return;

  const modalContent = document.getElementById('quickViewContent');
  if (!modalContent) return;

  const sizes = product.sizes || ['S', 'M', 'L'];
  const colors = product.colors || ['Standart'];

  modalContent.innerHTML = `
    <div class="quick-view-grid">
      <div>
        <img src="${product.primaryImage}" alt="${product.name}" class="quick-view-img">
      </div>
      <div class="quick-view-details">
        <span class="product-category-name">${product.category ? product.category.name : 'Kolleksiya'}</span>
        <h3>${product.name}</h3>
        <div class="product-rating">
          <div class="stars">★★★★★</div>
          <span class="rating-count">${product.rating} (${product.reviewCount} sharh)</span>
        </div>
        <div class="product-prices" style="margin: 14px 0;">
          <span class="price-current" style="font-size: 26px;">$${product.price.toFixed(2)}</span>
          ${product.oldPrice ? `<span class="price-old" style="font-size: 18px;">$${product.oldPrice.toFixed(2)}</span>` : ''}
        </div>
        <p class="quick-view-desc">${product.description}</p>
        
        <div style="margin-bottom: 16px;">
          <label style="font-size: 13px; font-weight: 700; display: block; margin-bottom: 6px;">O'lcham:</label>
          <div class="size-chips" id="qvSizeChips">
            ${sizes.map((s, idx) => `
              <button class="size-chip ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewSize(this, '${s}')">${s}</button>
            `).join('')}
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <label style="font-size: 13px; font-weight: 700; display: block; margin-bottom: 6px;">Rang:</label>
          <div class="size-chips" id="qvColorChips">
            ${colors.map((c, idx) => `
              <button class="size-chip ${idx === 0 ? 'active' : ''}" onclick="selectQuickViewColor(this, '${c}')">${c}</button>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; gap: 14px; align-items: center;">
          <div class="qty-control" style="height: 46px;">
            <button class="qty-btn" style="width: 36px;" onclick="adjustQvQty(-1)">-</button>
            <span class="qty-val" id="qvQtyVal" style="width: 44px; font-size: 15px;">1</span>
            <button class="qty-btn" style="width: 36px;" onclick="adjustQvQty(1)">+</button>
          </div>
          <button class="btn btn-accent" style="flex-grow: 1;" onclick="addQuickViewToCart(${product.id})">
            Savatga qo'shish
          </button>
        </div>
      </div>
    </div>
  `;

  window.qvSelectedSize = sizes[0];
  window.qvSelectedColor = colors[0];
  window.qvQuantity = 1;

  openModal('quickViewModal');
}

function selectQuickViewSize(btn, size) {
  document.querySelectorAll('#qvSizeChips .size-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  window.qvSelectedSize = size;
}

function selectQuickViewColor(btn, color) {
  document.querySelectorAll('#qvColorChips .size-chip').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  window.qvSelectedColor = color;
}

function adjustQvQty(delta) {
  window.qvQuantity = Math.max(1, (window.qvQuantity || 1) + delta);
  const el = document.getElementById('qvQtyVal');
  if (el) el.innerText = window.qvQuantity;
}

function addQuickViewToCart(productId) {
  const product = state.products.find(p => p.id === productId) || fallbackProducts.find(p => p.id === productId);
  if (!product) return;

  addToCart(product, window.qvSelectedSize, window.qvSelectedColor, window.qvQuantity || 1);
  closeModal('quickViewModal');
}

// Checkout and Order Placement
function openCheckoutModal() {
  if (state.cart.length === 0) {
    showToast("Xarid qilish uchun avval mahsulot tanlang!", 'error');
    return;
  }
  closeDrawer('cartDrawer');
  openModal('checkoutModal');
}

async function handleCheckoutSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.innerText = "Buyurtma yuborilmoqda...";

  const orderData = {
    customerName: form.customerName.value.trim(),
    email: form.email.value.trim(),
    phone: form.phone.value.trim(),
    shippingAddress: form.shippingAddress.value.trim(),
    city: form.city.value.trim(),
    postalCode: form.postalCode.value.trim(),
    paymentMethod: form.paymentMethod.value,
    couponCode: state.appliedCoupon ? state.appliedCoupon.code : null,
    items: state.cart.map(i => ({
      productId: i.productId,
      productName: i.productName,
      productImage: i.productImage,
      price: i.price,
      quantity: i.quantity,
      size: i.size,
      color: i.color,
      subtotal: i.price * i.quantity
    }))
  };

  try {
    const res = await fetch(`${API_BASE}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });

    if (res.ok) {
      const order = await res.json();
      completeOrderSuccess(order);
    } else {
      // Offline fallback order confirmation
      const fakeOrder = {
        orderNumber: 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
        customerName: orderData.customerName,
        totalAmount: state.cart.reduce((s, i) => s + i.price * i.quantity, 0)
      };
      completeOrderSuccess(fakeOrder);
    }
  } catch (err) {
    const fakeOrder = {
      orderNumber: 'ORD-' + Math.random().toString(36).substring(2, 10).toUpperCase(),
      customerName: orderData.customerName,
      totalAmount: state.cart.reduce((s, i) => s + i.price * i.quantity, 0)
    };
    completeOrderSuccess(fakeOrder);
  } finally {
    submitBtn.disabled = false;
    submitBtn.innerText = "Buyurtmani tasdiqlash";
  }
}

function completeOrderSuccess(order) {
  closeModal('checkoutModal');
  state.cart = [];
  state.appliedCoupon = null;
  saveCart();
  updateCartBadge();

  const successBox = document.getElementById('orderSuccessDetails');
  if (successBox) {
    successBox.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <div style="width: 64px; height: 64px; border-radius: 50%; background: #ecfdf5; color: #10b981; display: flex; align-items: center; justify-content: center; font-size: 32px; margin: 0 auto 16px;">✓</div>
        <h3 style="font-size: 22px; font-weight: 800; margin-bottom: 8px;">Buyurtmangiz Qabul Qilindi!</h3>
        <p style="color: var(--secondary); margin-bottom: 16px;">Xaridingiz uchun tashakkur, ${order.customerName}.</p>
        <div style="background: #f9fafb; padding: 14px; border-radius: var(--radius-md); font-family: monospace; font-size: 16px; font-weight: 700; margin-bottom: 20px;">
          Buyurtma raqami: ${order.orderNumber}
        </div>
        <p style="font-size: 13px; color: var(--text-muted); margin-bottom: 24px;">Operatorlarimiz tez orada siz bilan bog'lanib, yetkazib berish vaqtini aniqlashtiradilar.</p>
        <button class="btn btn-primary" onclick="closeModal('orderSuccessModal')">Xaridni davom ettirish</button>
      </div>
    `;
  }
  openModal('orderSuccessModal');
}

// Flash Sale Countdown
function initCountdown() {
  const endTime = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now

  setInterval(() => {
    const now = new Date().getTime();
    const distance = endTime - now;

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const hEl = document.getElementById('timerHours');
    const mEl = document.getElementById('timerMins');
    const sEl = document.getElementById('timerSecs');

    if (hEl) hEl.innerText = hours < 10 ? '0' + hours : hours;
    if (mEl) mEl.innerText = minutes < 10 ? '0' + minutes : minutes;
    if (sEl) sEl.innerText = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}

// Event Listeners & Filter Handlers
function setupEventListeners() {
  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTab = btn.getAttribute('data-tab');
      renderProducts();
    });
  });

  // Header Search Input
  const searchInput = document.getElementById('headerSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      loadProducts();
    });
  }

  // Size Filter Chips in Sidebar
  document.querySelectorAll('#sizeFilterChips .size-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('active')) {
        btn.classList.remove('active');
        state.selectedSize = null;
      } else {
        document.querySelectorAll('#sizeFilterChips .size-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.selectedSize = btn.innerText;
      }
      loadProducts();
    });
  });

  // Sort Dropdown
  const sortSelect = document.getElementById('catalogSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      state.sortBy = e.target.value;
      loadProducts();
    });
  }

  // Price Filters
  const minPriceInput = document.getElementById('minPriceInput');
  const maxPriceInput = document.getElementById('maxPriceInput');
  if (minPriceInput) {
    minPriceInput.addEventListener('change', (e) => {
      state.minPrice = e.target.value;
      loadProducts();
    });
  }
  if (maxPriceInput) {
    maxPriceInput.addEventListener('change', (e) => {
      state.maxPrice = e.target.value;
      loadProducts();
    });
  }

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast("Tabriklaymiz! 15% chegirma kodingiz emailingizga yuborildi.", 'success');
      newsletterForm.reset();
    });
  }
}

function filterByCategory(slug) {
  state.activeCategory = slug;
  renderCategoryFilterSidebar();
  loadProducts();
  scrollToShop();
}

function clearAllFilters() {
  state.activeCategory = null;
  state.searchQuery = '';
  state.selectedSize = null;
  state.selectedColor = null;
  state.minPrice = null;
  state.maxPrice = null;
  state.sortBy = 'featured';

  const sInput = document.getElementById('headerSearchInput');
  if (sInput) sInput.value = '';
  const minInput = document.getElementById('minPriceInput');
  if (minInput) minInput.value = '';
  const maxInput = document.getElementById('maxPriceInput');
  if (maxInput) maxInput.value = '';

  document.querySelectorAll('.size-chip').forEach(b => b.classList.remove('active'));
  renderCategoryFilterSidebar();
  loadProducts();
}

function scrollToShop() {
  const shopEl = document.getElementById('catalogSection');
  if (shopEl) {
    shopEl.scrollIntoView({ behavior: 'smooth' });
  }
}

// Modal & Drawer Helpers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.add('open');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) modal.classList.remove('open');
}

function openDrawer(id) {
  const drawer = document.getElementById(id);
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
  if (id === 'cartDrawer') renderCartDrawer();
}

function closeDrawer(id) {
  const drawer = document.getElementById(id);
  const overlay = document.getElementById('drawerOverlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

function closeAllModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  document.querySelectorAll('.drawer').forEach(d => d.classList.remove('open'));
}

// Toast System
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerText = message;
  container.appendChild(toast);

  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}
