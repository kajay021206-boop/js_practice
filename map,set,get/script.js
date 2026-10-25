const products=new Map();
const categories=new Set();

const productForm=document.getElementById("productForm");
const productid=document.getElementById("productId");
const productname=document.getElementById("productName");
const productprice=document.getElementById("productPrice");
const productcat=document.getElementById("productCategory");
const message=document.getElementById("message");
const productlist=document.getElementById("productList");
const searchid=document.getElementById("searchId");
const searchbtn=document.getElementById("searchBtn");
const searchresult=document.getElementById("searchResult");
const procount=document.getElementById("productCount");
 

productForm.addEventListener("submit",(event)=>{

event.preventDefault();

const id=productid.value.trim();
const name=productname.value.trim();
const price=Number(productprice.value.trim());
const cat=productcat.value.trim();

const product={
    name:name,
    price:price,
    cat:cat
}

products.set(id,product);

categories.add(cat);
message.textContent="product successfully added";
productForm.reset();

const card=document.createElement("div");
card.classList.add("product-card");
const pid=document.createElement("h3");
pid.textContent=`Product ID:${id}`;
const pname=document.createElement("h3");
pname.textContent=`Product Name:${product.name}`;
const pprice=document.createElement("h3");
pprice.textContent=`Product Price:${product.price}`;
const pcat=document.createElement("h3");
pcat.textContent=`Product Categorie:${product.cat}`;

const button=document.createElement("button");
button.textContent="Remove";

card.appendChild(pid);
card.appendChild(pname);
card.appendChild(pprice);
card.appendChild(pcat);
card.appendChild(button);
productlist.appendChild(card);

button.addEventListener("click",()=>{
card.remove();
products.delete(id);

const cateexit=[...products.value()].some(product=>product.cat===cat);

if(!cateexit){
    categories.delete(cat);
}
procount.textContent=products.size;
});

});


searchbtn.addEventListener("click",()=>{
  const seaid=searchid.value.trim();
  const foundproduct=products.get(seaid);
 if(products.has(seaid)){
  searchresult.textContent=`product name:${foundproduct.name},
   product price:${foundproduct.price},
   product categorie:${foundproduct.cat}`;
   procount.textContent=products.size;
   searchid.value="";
 }
 else{
    searchresult.textContent="Product not found!";
 }
  
});

