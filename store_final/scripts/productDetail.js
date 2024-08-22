const query = location.search
const parametro = new URLSearchParams(query)
const id = parametro.get("id")
console.log(id)

function createDetail(product) {
return `
<div div id = "details" class="columns-container" >
<section class="product-images-block">
<div class="product-images">
<img class="mini-img" src="${product.imageSrc}" alt="${product.title}" />
<img class="mini-img" src="https://i.postimg.cc/Y91Q1tYQ/mock2.jpg" alt="${product.title}" />
</div>
<img class="big-img" id="big-img" src="${product.imageSrc}" alt="${product.title}" />
</section>
<div class="product-description-block">
<h1 class="product-title">${product.title}</h1>
<form class="product-selector">
<fieldset class="product-fieldset">
<label class="product-label" for="color">Color</label>
<select class="product-select" type="text" placeholder="Selecciona un color" id="color">
${product.colors.map(
(c) => <option value="${c}">${c}</option>
).join("")}
</select>
</fieldset>
</form>
<div class="product-description">
<span class="product-label">Descripción</span>
<p>
Experience the power of creativity with the ${product.title}.
Featuring 8GB of RAM and 512GB of storage, this laptop provides
the performance and storage capacity needed for demanding tasks.
The sleek design in ${product.description} and space gray adds a touch of
sophistication. The high-resolution Retina display brings your
visuals to life, whether you're editing photos, creating videos,
or simply browsing the web. With the latest technology and a
lightweight build, the ${product.title} is the perfect companion
for professionals and creative individuals alike.
</p>
</div>
</div>
<div class="product-checkout-block">
<div class="checkout-container">
<span class="checkout-total-label">Total:</span>
<h2 id="price" class="checkout-total-price">${product.price}</h2>
<span class="product-discount">${product.discount}</span>
<p class="checkout-description">
Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
50711 haciendo la solicitud en AFIP.
</p>
<ul class="checkout-policy-list">
<li>
<span class="policy-icon"><img src="./assets/truck.png" alt="Truck" /></span>
<span class="policy-desc">Agrega el producto al carrito para conocer los costos de
envío</span>
</li>
<li>
<span class="policy-icon"><img src="./assets/plane.png" alt="Plane" /></span>
<span class="policy-desc">Recibí aproximadamente entre 10 y 15 días hábiles,
seleccionando envío normal</span>
</li>
</ul>
<div class="checkout-process">
<div class="top">
<input type="number" min="1" value="1" />
<button type="button" class="cart-btn">
Añadir al Carrito
</button>
</div>
</div>
</div>
</div>
</div>
<div class="sales-block">
<h2 class="sales-title">Ofertas de la semana</h2>
<div id="product-container" class="product-container">

</div>
</div>
`
}

const createSide = (products) => {
i = 1
let content = "";
products.forEach(product => {
if (i <= 3 && product.id != id) {
let p = `<a class="product-card" href="./details.html?id=${product.id}">
<img class="product-img" src="${product.imageSrc} alt="${product.title}" />
<div class="product-info">
<span class="product-title">${product.title}</span>
<span class="product-description">${product.description}</span>
<div class="product-price-block">
<span class="product-price">${product.price}</span>
<span class="product-discount">${product.discount}</span>
</div>
<div class="product-tax-policy">
Incluye impuesto País y percepción AFIP
</div>
</div>
</a>`
content += p;
i++;
}
});
return content
}


function printDetails(products) {
const main = document.querySelector('.details-container')
const product = products.find(p => p.id === id)
const productMain = createDetail(product)
main.innerHTML = productMain;
}


function printSide(products) {
const side = document.querySelector('#product-container')
const productsSide = createSide(products)
console.log(productsSide)
side.innerHTML = productsSide
}