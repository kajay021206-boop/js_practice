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
const catcount=document.getElementById("catCount");
const toshow=document.getElementById("toshow");
 

productForm.addEventListener("submit",(event)=>{

event.preventDefault();

const id=productid.value.trim();
if(products.has(id)){
    message.textContent="Product ID already exists!";
    return;
 }
const name=productname.value.trim();
const price=Number(productprice.value.trim());
const cat=productcat.value.trim();



const product={
    name:name,
    price:price,
    cat:cat
}

products.set(id,product);
procount.textContent=products.size;

categories.add(cat);
catcount.textContent=categories.size;
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
procount.textContent=products.size;
const cateexit=[...products.values()].some(product=>product.cat===cat);

if(!cateexit){
    categories.delete(cat);
}
catcount.textContent=categories.size;
});



});


searchbtn.addEventListener("click",()=>{
  const seaid=searchid.value.trim();

 if(products.has(seaid)){
    toshow.textContent=`Product Found!`;
    const foundproduct=products.get(seaid);
  searchresult.textContent=
  `product ID:${seaid}, ` +
   `product name:${foundproduct.name}, ` + 
     `product price:${foundproduct.price}, ` + 
      `product categorie:${foundproduct.cat}`;
   procount.textContent=products.size;
   searchid.value="";
   
 }
 else{
    searchresult.textContent="Product not found!";
        toshow.textContent=``;
 }
 
});

