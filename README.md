# Mini Ecommerce Web Application

A simple ecommerce application with a Flask backend and vanilla JavaScript frontend. Students can learn full-stack web development with this project.

## Table of Contents
1. [Setup & Installation](#1-setup--installation)
2. [Product Features & Project Structure](#2-product-features--project-structure)
3. [How to Use the Application](#3-how-to-use-the-application)
4. [Web Development Theory](#4-web-development-theory)
5. [Client-Server Architecture](#5-client-server-architecture)
6. [Code Documentation](#6-code-documentation)
7. [Troubleshooting](#7-troubleshooting)

---

## 1. Setup & Installation

### Prerequisites

- **Python 3.8 or higher** - [Download here](https://www.python.org/downloads/)
- **Any modern web browser** - Chrome, Firefox, Safari, Edge

### Step-by-Step Installation Guide

### Step 1: Open Terminal/Command Prompt

**On macOS/Linux:**
- Press `Cmd + Space` → Type "Terminal" → Press Enter

**On Windows:**
- Press `Win + R` → Type "cmd" → Press Enter

### Step 2: Navigate to Project Directory

```bash
cd "/Users/sharveshsivagnanam/Documents/college/IETE Workshop"
```

> **Note:** Replace the path with your actual project folder path if different.

### Step 3: Create a Python Virtual Environment

A virtual environment keeps project dependencies isolated from your system Python.

**On macOS/Linux:**
```bash
python3 -m venv env
```

**On Windows:**
```bash
python -m venv env
```

**What this does:**
- Creates an isolated Python environment in the `env` folder
- Prevents conflicts with other Python projects

### Step 4: Activate the Virtual Environment

**On macOS/Linux:**
```bash
source env/bin/activate
```

You should see `(env)` at the beginning of your terminal line.

**On Windows:**
- For policy issues
```bash
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```
```bash
.\env\Scripts\activate
```

**Important:** Always activate the virtual environment before working on the project.

### Step 5: Install Python Dependencies

```bash
pip install -r requirements.txt
```

This installs three packages:
- **Flask** - Web framework for creating the backend server
- **SQLAlchemy** - Database ORM for managing SQLite database
- **Flask-CORS** - Handles cross-origin requests between frontend and backend

**Expected output:**
```
Successfully installed Flask-3.1.2 SQLAlchemy-2.0.45 flask-cors-6.0.1 ...
```

**Verify installation:**
```bash
pip list
```

### Step 6: Run the Flask Backend Server

```bash
python app.py
```

**Expected output:**
```
 * Serving Flask app 'E-Commerce'
 * Debug mode: on
 * Running on http://localhost:8080
 * Press CTRL+C to quit
```

⚠️ **IMPORTANT:** Keep this terminal window open. The server must run continuously for the app to work.

### Step 7: Open the Web Application in Browser

Open a **new terminal/command prompt** (keep the Flask server running in the original one).

Then navigate to:
```
http://localhost:8080
```

Or open `index.html` directly:
- **macOS:** Double-click `index.html` or drag it to your browser
- **Windows:** Double-click `index.html`

✅ **Setup Complete!** You should see the "Mini Ecommerce" webpage.

### Stopping the Server

When done, press `Ctrl+C` in the terminal running Flask to stop the server.

### Deactivating the Virtual Environment

Exit the virtual environment:
```bash
deactivate
```

---

## 2. Product Features & Project Structure

### Project Directory Structure

```
IETE Workshop/
│
├── app.py                 # Flask backend server (API endpoints)
├── index.html            # Frontend HTML structure
├── app.js                # Frontend JavaScript (product logic)
├── styles.css            # Frontend styling (design & layout)
├── requirements.txt      # Python package dependencies
├── database.db           # SQLite database (auto-created on first run)
├── README.md             # This documentation file
│
└── env/                  # Python virtual environment (created during setup)
    ├── bin/              # Executable files (Flask, Python)
    └── lib/              # Installed Python packages
```

### Core Features

#### ✅ Feature 1: View All Products
- Products display in a responsive grid layout
- Each product shows:
  - Product image
  - Product title
  - Price in rupees (₹)
  - Edit and Remove buttons

#### ✅ Feature 2: Add New Product
- Form with fields:
  - Product Title
  - Price
  - Image URL
  - Description
- Click "Add Product" button to save
- Product appears instantly in the grid

#### ✅ Feature 3: Edit Product
- Click the green "Edit" button on any product card
- Edit pop-up prompts appear for:
  - Title
  - Price
  - Image URL
- Changes are saved automatically to database

#### ✅ Feature 4: Remove/Delete Product
- Click the red "Remove" button on any product card
- Confirmation dialog prevents accidental deletion
- Product is removed from catalog and database

#### ✅ Feature 5: Database Persistence
- All products saved in SQLite database
- Data persists even after closing the app
- No data loss on server restart

#### ✅ Feature 6: API with CORS Support
- Separate backend server (Flask)
- Frontend communicates via HTTP requests
- CORS enabled for secure cross-origin requests

### File-by-File Breakdown

#### **app.py** (Backend Server)
```python
# Database setup with SQLAlchemy
- Products table with: id, title, price, description, image

# API Endpoints:
- GET  /product             → Fetch all products
- POST /product             → Add new product
- PUT  /product/<id>        → Update product
- DELETE /product/<id>      → Delete product
- GET  /                    → Server health check
```

**Key Code Example:**
```python
@app.route("/product", methods=['GET', 'POST'])
def product():
    if request.method == "GET":
        # Returns all products as JSON
    if request.method == "POST":
        # Adds new product from form data
```

#### **index.html** (Frontend Structure)
```html
Components:
- Title: "Mini Ecommerce"
- Add Product Form:
  - 4 input fields (title, price, image, description)
  - Add Product button
- Products Grid:
  - Container that holds product cards
```

#### **app.js** (Frontend Logic)
```javascript
Functions:
- fetchProducts()      → Get products from API
- displayProducts()    → Render products as cards
- addProduct()         → Submit form and add product
- editProduct()        → Open edit prompts
- updateProduct()      → Send changes to API
- removeProduct()      → Delete product with confirmation
```

#### **styles.css** (Design & Styling)
```css
Components:
- Header styling (h1, titles)
- Form styling (inputs, buttons)
- Product card styling (grid, shadows, hover effects)
- Button styling (colors: blue, green, red)
- Responsive design (auto-fill grid)
```

### Database Schema

**Table Name:** `product`

| Column | Type | Description |
|--------|------|-------------|
| id | Integer | Unique product ID (auto-increment) |
| title | String | Product name |
| price | Float | Product price in rupees |
| description | String | Product details |
| image | String | Product image URL |

**Example Product in Database:**
```json
{
  "id": 1,
  "title": "Laptop",
  "price": 50000.00,
  "description": "High performance laptop",
  "image": "https://example.com/laptop.jpg"
}
```

### Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | HTML, CSS, JavaScript | User interface |
| **Backend** | Flask | Web server & API |
| **Database** | SQLite | Data storage |
| **ORM** | SQLAlchemy | Database management |
| **Communication** | JSON, HTTP | Data exchange |

---

## 3. How to Use the Application

### Adding a Product

1. Fill in the form fields:
   - **Product Title** - Name of the product
   - **Price** - Cost in rupees
   - **Image URL** - Direct link to product image
   - **Description** - Product details
2. Click the **"Add Product"** button
3. The product appears in the grid below

### Editing a Product

1. Click the **"Edit"** button (green) on any product card
2. Enter new values in the pop-up prompts:
   - Title
   - Price
   - Image URL
3. Changes are saved automatically

### Removing a Product

1. Click the **"Remove"** button (red) on any product card
2. Confirm the deletion in the pop-up dialog
3. Product is removed from the catalog

---

## 4. Web Development Theory

### 🏗️ HTML (HyperText Markup Language) - The Structure

**What is HTML?**
HTML is the skeleton/structure of a webpage. It defines what elements appear on the page.

```
┌─────────────────────────────────────────┐
│          HTML Document Structure        │
├─────────────────────────────────────────┤
│ <html>                                  │
│   <head>                                │
│     <title>My Page</title>             │
│     <link> CSS files                   │
│   </head>                               │
│   <body>                                │
│     <h1>Heading</h1>                   │
│     <p>Paragraph</p>                   │
│     <button>Click Me</button>          │
│     <script> JavaScript files         │
│   </body>                               │
│ </html>                                 │
└─────────────────────────────────────────┘
```

**Common HTML Tags:**

| Tag | Purpose | Example |
|-----|---------|---------|
| `<h1>` to `<h6>` | Headings | `<h1>Welcome</h1>` |
| `<p>` | Paragraph text | `<p>Description here</p>` |
| `<div>` | Container/Section | `<div class="box">Content</div>` |
| `<input>` | Form input field | `<input type="text">` |
| `<button>` | Clickable button | `<button>Click</button>` |
| `<img>` | Images | `<img src="photo.jpg">` |
| `<a>` | Links | `<a href="page.html">Link</a>` |

**In Our Project:**
```html
<h1>Mini Ecommerce</h1>           ← Heading
<input id="productTitle" />        ← Input field
<div class="products"></div>       ← Container for products
<button id="addProductBtn"></button> ← Button
```

---

### 🎨 CSS (Cascading Style Sheets) - The Design

**What is CSS?**
CSS controls the visual appearance: colors, sizes, spacing, animations, and layout.

```
┌─────────────────────────────────────────┐
│           CSS Styling Flow              │
├─────────────────────────────────────────┤
│  HTML Element → CSS Rules → Visual      │
│                                         │
│  <h1>Title</h1>  →  h1 {              │
│                      color: blue;      │
│                      font-size: 24px;  │
│                    }  →  Blue heading  │
└─────────────────────────────────────────┘
```

**CSS Properties Breakdown:**

| Property | Purpose | Example |
|----------|---------|---------|
| `color` | Text color | `color: #007bff;` |
| `background-color` | Background color | `background-color: white;` |
| `padding` | Internal spacing | `padding: 15px;` |
| `margin` | External spacing | `margin: 20px;` |
| `border-radius` | Rounded corners | `border-radius: 8px;` |
| `box-shadow` | Shadow effect | `box-shadow: 0 2px 8px rgba(0,0,0,0.1);` |
| `display: grid` | Grid layout | `grid-template-columns: repeat(3, 1fr);` |
| `transition` | Smooth animation | `transition: all 0.3s;` |

**CSS Selectors:**

```css
/* Element selector */
h1 { color: blue; }

/* Class selector */
.product-card { padding: 15px; }

/* ID selector */
#addProductBtn { background-color: blue; }

/* Hover effect (Interaction) */
.btn:hover { background-color: darkblue; }
```

**In Our Project - Responsive Grid:**
```css
.products {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
}
/* Creates a flexible grid that adapts to screen size! */
```

---

### ⚡ JavaScript - The Interactivity

**What is JavaScript?**
JavaScript makes webpages interactive. It responds to user actions and communicates with the backend.

```
┌──────────────────────────────────────────┐
│      JavaScript Event Flow               │
├──────────────────────────────────────────┤
│                                          │
│  User Action  →  Event Listener  →     │
│  (Click)          (onclick)             │
│                        ↓                │
│                  JavaScript Function    │
│                        ↓                │
│                  Update Page/Data       │
│                                          │
└──────────────────────────────────────────┘
```

**JavaScript Fundamentals:**

```javascript
// 1. Variables - Store data
const productTitle = "Laptop";
let productPrice = 50000;

// 2. Functions - Reusable code blocks
function addProduct() {
    console.log("Product added!");
}

// 3. Event Listeners - Listen to user actions
document.getElementById("addProductBtn").addEventListener("click", addProduct);

// 4. DOM Manipulation - Change the page
const element = document.querySelector(".products");
element.innerHTML = "<div>Product Card</div>";
```

**Async/Await - Fetching Data from Server:**

```javascript
// Traditional way (Callbacks)
fetch(API)
    .then(response => response.json())
    .then(data => console.log(data))

// Modern way (Async/Await) - Cleaner!
async function fetchData() {
    const response = await fetch(API);
    const data = await response.json();
    console.log(data);
}
```

**In Our Project - Adding a Product:**
```javascript
async function addProduct() {
    const title = document.getElementById("productTitle").value;
    const price = document.getElementById("productPrice").value;
    
    const response = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: title, price: price })
    });
    
    if (response.ok) {
        fetchProducts(); // Refresh the list
    }
}
```

---

### 🐍 Python Flask - The Backend

**What is Python Flask?**
Flask is a lightweight web framework that creates a server. It handles:
- Receiving requests from frontend
- Processing data
- Database operations
- Sending responses back

```
┌─────────────────────────────────────────┐
│      Flask Application Flow             │
├─────────────────────────────────────────┤
│                                         │
│  Client Request  →  Flask Route  →    │
│                      (Function)        │
│                           ↓            │
│                    Process/Database    │
│                           ↓            │
│                    Return Response     │
│                                         │
└─────────────────────────────────────────┘
```

**Flask Route Structure:**

```python
from flask import Flask
app = Flask("MyApp")

# Define a route
@app.route("/products", methods=['GET'])
def get_products():
    # Handle GET request
    return data

@app.route("/products", methods=['POST'])
def create_product():
    # Handle POST request
    return response

# Start the server
app.run(host="localhost", port=8080)
```

**HTTP Methods (CRUD Operations):**

| Method | Purpose | Action |
|--------|---------|--------|
| `GET` | Retrieve data | Fetch products |
| `POST` | Create data | Add new product |
| `PUT` | Update data | Edit product |
| `DELETE` | Remove data | Remove product |

**In Our Project - Product API:**

```python
@app.route("/product", methods=['GET', 'POST'])
def product():
    if request.method == "GET":
        # Get all products from database
        products = session.query(Products).all()
        return json.dumps([p.to_dict() for p in products])
    
    if request.method == "POST":
        # Add new product to database
        json_data = json.loads(request.get_data())
        product = Products(
            title=json_data['title'],
            price=json_data['price'],
            image=json_data['image']
        )
        session.add(product)
        session.commit()

@app.route("/product/<int:id>", methods=['PUT', 'DELETE'])
def update_delete_product(id):
    product = session.query(Products).filter(Products.id == id).first()
    # Update or delete the product
```

---


**JSON Format - Universal Language for Servers & Clients:**

```json
// Product as JSON (sent between browser & server)
{
  "id": 1,
  "title": "Laptop",
  "price": 50000,
  "description": "High performance",
  "image": "https://example.com/laptop.jpg"
}
```

**Data Flow Diagram:**

```
Browser (JavaScript)     Network     Server (Python Flask)
─────────────────────────────────────────────────────────

JavaScript Object       JSON String     Python Dictionary
{                  → serialize →    {
  title: "Laptop"                    "title": "Laptop"
}                                   }
                        JSON
                                    
Product Card HTML   ← deserialize ←  Database Record
<div>Laptop</div>                    (id, title, price...)
```

### ⚡ Real-time Interaction Animation

```
Timeline of Adding a Product:
═════════════════════════════════════════════════════════════════

0ms    User fills form and clicks "Add Product"
       ├─ Title: "Laptop"
       ├─ Price: "50000"
       ├─ Image: "url"
       └─ Description: "High performance"

50ms   JavaScript collects form data
       └─ Creates JavaScript object with form values

100ms  Browser sends POST request
       POST /product → [JSON data travels over internet]

200ms  Server receives request
       └─ Flask @app.route("/product", methods=['POST'])

300ms  Server processes data
       ├─ Extract JSON data
       ├─ Create Products object
       └─ Validate input

400ms  Database operation (INSERT)
       └─ SQLite: INSERT INTO product VALUES(...)

500ms  Server returns response
       ← [JSON response travels back over internet]

600ms  Browser receives response
       └─ JavaScript: if (response.ok) { ... }

700ms  Page updates
       ├─ Clear form fields
       ├─ Fetch all products again (GET request)
       └─ Display product grid

800ms  User sees new product in grid
       └─ Success! ✅
```

### 📡 All CRUD Operations

```
CREATE (Add Product)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Browser (POST /product with data)
           ↓
Flask: @app.route("/product", methods=['POST'])
           ↓
Database: INSERT INTO product VALUES(...)
           ↓
Response: {"status": "added"}
           ↓
Browser updates display with new product


READ (View Products)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Browser (GET /product)
           ↓
Flask: @app.route("/product", methods=['GET'])
           ↓
Database: SELECT * FROM product
           ↓
Response: [{"id":1, "title":"Laptop", ...}, ...]
           ↓
Browser renders product grid on page


UPDATE (Edit Product)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Browser (PUT /product/1 with new data)
           ↓
Flask: @app.route("/product/<id>", methods=['PUT'])
           ↓
Database: UPDATE product SET title="..." WHERE id=1
           ↓
Response: {"status": "updated"}
           ↓
Browser refreshes and shows edited product


DELETE (Remove Product)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Browser (DELETE /product/1)
           ↓
Flask: @app.route("/product/<id>", methods=['DELETE'])
           ↓
Database: DELETE FROM product WHERE id=1
           ↓
Response: {"status": "deleted"}
           ↓
Browser refreshes and product disappears from grid
```

---

## 6. Code Documentation

### Backend (app.py)

| Component | Purpose |
|-----------|---------|
| `Products` class | Database model for products |
| `/product` (GET) | Fetch all products |
| `/product` (POST) | Add a new product |
| `/product/<id>` (PUT) | Update an existing product |
| `/product/<id>` (DELETE) | Delete a product |

**Example API Calls:**

Get all products:
```bash
curl http://localhost:8080/product
```

Add a product:
```bash
curl -X POST http://localhost:8080/product \
  -H "Content-Type: application/json" \
  -d '{"title":"Laptop","price":50000,"image":"url","description":"High performance"}'
```

### Frontend (app.js)

| Function | Purpose |
|----------|---------|
| `fetchProducts()` | Retrieve all products from API |
| `displayProducts()` | Render products as cards |
| `addProduct()` | Submit new product form |
| `editProduct()` | Open edit prompts |
| `updateProduct()` | Send PUT request to API |
| `removeProduct()` | Send DELETE request to API |

### Frontend (styles.css)

- Responsive grid layout for product cards
- Form styling with hover effects
- Color scheme: Blue (#007bff), Green (#28a745), Red (#dc3545)

### Database Information

- **Type:** SQLite
- **File:** `database.db` (auto-created on first run)
- **Table:** `product`
- **Columns:**
  - `id` (Integer, Primary Key)
  - `title` (String)
  - `price` (Float)
  - `description` (String)
  - `image` (String)

---

## 7. Troubleshooting

### Problem: "Command 'python' not found"

**Solution:** Use `python3` instead:
```bash
python3 app.py
```

### Problem: "ModuleNotFoundError: No module named 'flask'"

**Solution:** Make sure your virtual environment is activated:
```bash
source env/bin/activate    # macOS/Linux
# or
env\Scripts\activate       # Windows
```

Then install dependencies again:
```bash
pip install -r requirements.txt
```

### Problem: Port 8080 is already in use

**Solution:** Change the port in `app.py` line:
```python
app.run(host="localhost",port=8081,debug=True)  # Change 8080 to 8081
```

Then visit: `http://localhost:8081`

### Problem: Images not loading

**Solution:** Use valid image URLs from:
- [Unsplash](https://unsplash.com)
- [Pexels](https://www.pexels.com)
- [Pixabay](https://pixabay.com)

Example image URL:
```
https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400
```

### Problem: Form data not appearing after adding product

**Solution:** Make sure:
1. Flask server is running (`python app.py`)
2. Browser console shows no errors (F12 → Console tab)
3. Check that all form fields are filled

## Learning Outcomes

By completing this project, you'll learn:

- **Backend Development**
  - Flask framework basics
  - RESTful API design
  - SQLAlchemy ORM
  - CORS and security

- **Frontend Development**
  - Vanilla JavaScript (no frameworks)
  - Async/Await and Fetch API
  - DOM manipulation
  - CSS Grid and Flexbox

- **Database Management**
  - SQLite fundamentals
  - CRUD operations
  - Data persistence

- **Full-Stack Integration**
  - Client-Server communication
  - HTTP methods (GET, POST, PUT, DELETE)
  - JSON data interchange

## Next Steps

### Enhancements You Can Add:

1. **Search Functionality** - Filter products by title
2. **Categories** - Organize products into categories
3. **Cart System** - Add products to cart and checkout
4. **User Authentication** - Login/signup for users
5. **Product Reviews** - Add rating and review system
6. **Pagination** - Display products in pages
7. **Stock Management** - Track product inventory
8. **Image Upload** - Upload images instead of URLs

## Resources for Learning

- [Flask Documentation](https://flask.palletsprojects.com/)
- [SQLAlchemy Tutorial](https://docs.sqlalchemy.org/)
- [JavaScript Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)

## Common Python Commands Reference

| Command | Purpose |
|---------|---------|
| `python app.py` | Run the Flask server |
| `pip install package_name` | Install a package |
| `pip list` | List installed packages |
| `deactivate` | Exit virtual environment |
| `pip freeze > requirements.txt` | Update requirements file |

## Summary

You now have a fully functional ecommerce application! The combination of Flask backend and vanilla JavaScript frontend provides excellent learning material for aspiring web developers.

Happy coding! 🚀
