const API = "http://localhost:8080/product";

async function fetchProducts() {
    try {
        const response = await fetch(API);
        const products = await response.json();

        console.log(products);
        displayProducts(products);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

function displayProducts(products) {
    const productList = document.querySelector(".products");
    productList.innerHTML = "";

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.id = `product-${product.id}`;
        
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        productCard.appendChild(img);
        
        const title = document.createElement("h3");
        title.className = "product-title";
        title.textContent = product.title;
        productCard.appendChild(title);
        
        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = `₹${product.price}`;
        productCard.appendChild(price);
        
        const buttonContainer = document.createElement("div");
        buttonContainer.className = "product-buttons";
        
        const editBtn = document.createElement("button");
        editBtn.className = "btn btn-edit";
        editBtn.textContent = "Edit";
        editBtn.onclick = () => editProduct(product);
        buttonContainer.appendChild(editBtn);
        
        const removeBtn = document.createElement("button");
        removeBtn.className = "btn btn-remove";
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeProduct(product.id);
        buttonContainer.appendChild(removeBtn);
        
        productCard.appendChild(buttonContainer);
        productList.appendChild(productCard);
    });
}

async function addProduct() {
    const title = document.getElementById("productTitle").value;
    const price = document.getElementById("productPrice").value;
    const imageUrl = document.getElementById("productImage").value;
    const description = document.getElementById("productDescription").value;

    if (!title || !price || !imageUrl || !description) {
        alert("Please fill all fields");
        return;
    }

    try {
        const response = await fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                price: parseFloat(price),
                image: imageUrl,
                description: description
            })
        });

        if (response.ok) {
            document.getElementById("productTitle").value = "";
            document.getElementById("productPrice").value = "";
            document.getElementById("productImage").value = "";
            
            fetchProducts();
        }
    } catch (error) {
        console.error("Error adding product:", error);
    }
}

function editProduct(product) {
    const newTitle = prompt("Edit Title:", product.title);
    if (newTitle === null) return;
    
    const newPrice = prompt("Edit Price:", product.price);
    if (newPrice === null) return;
    
    const newImageUrl = prompt("Edit Image URL:", product.image_url);
    if (newImageUrl === null) return;

    updateProduct(product.id, newTitle, parseFloat(newPrice), newImageUrl);
}

async function updateProduct(id, title, price, imageUrl) {
    try {
        const response = await fetch(`${API}/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                price: price,
                image_url: imageUrl
            })
        });

        if (response.ok) {
            fetchProducts();
        }
    } catch (error) {
        console.error("Error updating product:", error);
    }
}

async function removeProduct(id) {
    if (!confirm("Are you sure you want to remove this product?")) {
        return;
    }

    try {
        const response = await fetch(`${API}/${id}`, {
            method: "DELETE"
        });

        if (response.ok) {
            fetchProducts();
        }
    } catch (error) {
        console.error("Error removing product:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("addProductBtn").addEventListener("click", addProduct);
    fetchProducts();
});