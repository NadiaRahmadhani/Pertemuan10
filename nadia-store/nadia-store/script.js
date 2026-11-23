const items=[
 {name:'Tote Bag Daily',desc:'Tas simpel untuk kegiatan harian.',price:89000,emoji:'👜',bg:'#f3e1d5',tag:'BEST SELLER'},
 {name:'Soft Knit Cardigan',desc:'Cardigan nyaman dengan warna lembut.',price:149000,emoji:'🧥',bg:'#e9e2ee',tag:'NEW'},
 {name:'Classic Sneakers',desc:'Sneakers kasual untuk langkahmu.',price:179000,emoji:'👟',bg:'#e0e9e5',tag:'POPULAR'},
 {name:'Minimalist Watch',desc:'Aksesori minimalis untuk sehari-hari.',price:119000,emoji:'⌚',bg:'#f1e9d4',tag:'LIMITED'}
];
const rupiah=n=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(n);
const grid=document.getElementById('productGrid');
items.forEach((item,i)=>{const card=document.createElement('article');card.className='product';card.innerHTML=`<div class="product-visual" style="--pbg:${item.bg}"><span class="pill">${item.tag}</span>${item.emoji}</div><div class="product-info"><h3>${item.name}</h3><p>${item.desc}</p><div class="price-row"><span class="price">${rupiah(item.price)}</span><button class="add" aria-label="Tambah ${item.name}" data-index="${i}">+</button></div></div>`;grid.appendChild(card)});
let cart=0;const count=document.getElementById('cartCount');const toast=document.getElementById('toast');let toastTimer;
grid.addEventListener('click',e=>{const btn=e.target.closest('.add');if(!btn)return;cart++;count.textContent=cart;toast.textContent=`${items[btn.dataset.index].name} ditambahkan ke keranjang!`;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),1900)});
document.getElementById('cartBtn').addEventListener('click',()=>{alert(`Jumlah item di keranjang: ${cart}`)});
