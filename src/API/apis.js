export async function getData() {
    const res = await fetch('https://fakestoreapi.com/products');
    return res.json()
}

export async function getProductData(id){
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    return res.json();
}
