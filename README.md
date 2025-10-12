
---

## ⚙️ Features Implemented

✅ **CRUD Operations**  
- Create new listings  
- View all listings  
- Edit existing listings  
- Delete listings  

✅ **EJS Partials & Layouts**  
- Reusable templates using `includes/` folder  
- Cleaner structure with DRY principle  

✅ **Dynamic Routing**  
- URL-based routing: `/listings/:id`, `/listings/new`, etc.

✅ **MongoDB Integration**  
- Listings stored & retrieved dynamically via Mongoose

✅ **RESTful APIs**  
- Follows REST principles for CRUD (GET, POST, PUT, DELETE)

✅ **Form Handling**  
- HTML forms with method override for PUT/DELETE requests

---

## 🧩 Example Routes

| Route | HTTP Method | Description |
|--------|--------------|--------------|
| `/listings` | GET | Show all listings |
| `/listings/new` | GET | Show form to create new listing |
| `/listings` | POST | Create new listing |
| `/listings/:id` | GET | Show details of a listing |
| `/listings/:id/edit` | GET | Edit a listing |
| `/listings/:id` | PUT | Update a listing |
| `/listings/:id` | DELETE | Delete a listing |

---

## 🧠 Concepts Used (React & Deployment excluded)

- **MVC pattern** (Model–View–Controller)  
- **EJS templating** with partials  
- **Routing & REST architecture**  
- **MongoDB CRUD via Mongoose**  
- **Async/Await for DB operations**  
- **Environment variables using `.env`**  
- **Middleware concepts** (methodOverride, express.urlencoded, static files)  
- **Server-Side Rendering (SSR)**  
- **Error handling with try-catch & async functions**  

---

## 🛠️ How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/EzHomes.git
   cd EzHomes
