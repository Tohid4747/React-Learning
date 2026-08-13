# ⚛️ React Learning Journey

> A structured record of my journey learning **React.js** through the **Sheryians Coding School React course**, hands-on practice, experimentation, and mini-projects.

This repository contains my **React notes, concepts, examples, experiments, and learning progress** as I build a strong foundation in modern React development.

---

## 📚 Learning Roadmap

```text
React Fundamentals
        │
        ├── Components
        ├── JSX
        ├── Fragments
        ├── Props
        ├── State
        ├── Hooks
        │
        ├── API Communication
        │   ├── Axios
        │   ├── Promises
        │   └── async/await
        │
        ├── Side Effects
        │   └── useEffect()
        │
        ├── Routing
        │   └── React Router DOM
        │
        ├── Shared Data
        │   └── Context API
        │
        └── Practical Projects
```

---

# 📅 Day 1 — React Fundamentals

## 📚 Topics Covered

* React Introduction
* React Components
* Component Hierarchy
* Component Inside Component
* JSX
* JSX Expressions
* React Fragments
* React Hooks
* `useState()`
* State & Re-rendering
* Tailwind CSS Setup
* Tailwind Utility Classes
* Navbar Component
* Footer Component
* Props
* Props Destructuring
* Props Data Types
* Props are Read-Only
* Props Drilling

---

# ⚛️ React Basics

React is a **JavaScript library for building user interfaces using reusable components**.

```text
React Application
       ↓
   Components
       ↓
      JSX
       ↓
      UI
```

React encourages us to break a large interface into smaller, reusable components.

---

# 🧩 Components

A component is a **reusable and independent piece of UI**.

### Example

```jsx
function Navbar() {
  return <nav>My Navbar</nav>;
}

export default Navbar;
```

Components can be used inside other components:

```jsx
function App() {
  return (
    <>
      <Navbar />
      <h1>Welcome</h1>
    </>
  );
}
```

### Component Hierarchy

```text
App
├── Navbar
├── Main
└── Footer
```

---

# 🧩 JSX

JSX allows us to write **HTML-like syntax inside JavaScript**.

```jsx
function App() {
  const name = "Captain";

  return <h1>Hello {name}</h1>;
}
```

JavaScript expressions can be placed inside `{}`.

### Important JSX Rules

React uses:

```jsx
className="box"
```

instead of HTML's:

```html
class="box"
```

Other important JSX rules:

* Elements must be properly closed.
* A component must return a single JSX structure.
* JavaScript expressions can be written inside `{}`.
* Use `className` instead of `class`.
* Inline styles are written as JavaScript objects.

---

# 🧩 React Fragments

Fragments allow multiple JSX elements to be grouped **without adding an extra DOM element**.

```jsx
function App() {
  return (
    <>
      <h1>Hello</h1>
      <p>Welcome</p>
    </>
  );
}
```

The shorthand:

```jsx
<>
  ...
</>
```

is equivalent to:

```jsx
<React.Fragment>
  ...
</React.Fragment>
```

---

# 🪝 Hooks & `useState()`

Hooks allow functional components to use React features such as state and effects.

The first Hook learned:

```jsx
useState()
```

### Example

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>
  );
}
```

### Understanding `useState()`

```jsx
const [count, setCount] = useState(0);
```

```text
count
  ↓
Current state value

setCount
  ↓
Function used to update state

0
  ↓
Initial state value
```

### State Flow

```text
User Interaction
       ↓
   setState()
       ↓
 State Changes
       ↓
 React Re-renders
       ↓
    UI Updates
```

State should not be directly modified.

```jsx
// ❌ Wrong
count = count + 1;

// ✅ Correct
setCount(count + 1);
```

---

# 🎨 Tailwind CSS

Tailwind CSS is a **utility-first CSS framework** that allows styling through utility classes.

### Installation

```bash
npm install tailwindcss @tailwindcss/vite
```

### Example

```jsx
<h1 className="text-4xl font-bold text-blue-600">
  Hello Tailwind!
</h1>
```

### Common Utility Classes

| Class                 | Purpose                     |
| --------------------- | --------------------------- |
| `flex`                | Enables Flexbox             |
| `w-full`              | Width: 100%                 |
| `text-center`         | Centers text                |
| `text-white`          | White text                  |
| `font-bold`           | Bold text                   |
| `py-4`                | Vertical padding            |
| `bg-gray-900`         | Dark background             |
| `gap-6`               | Gap between elements        |
| `hover:text-blue-600` | Changes text color on hover |

---

# 🧭 Navbar Component

Created a reusable Navbar component using React and Tailwind CSS.

```jsx
function Navbar() {
  return (
    <nav>
      <h2>My Website</h2>

      <div className="flex gap-6">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
```

---

# 🦶 Footer Component

Created a reusable Footer component.

```jsx
function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white text-center py-4">
      <p>© 2026 My Website. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
```

---

# 📦 Props

**Props (Properties)** allow data to be passed from a parent component to a child component.

### Parent

```jsx
function App() {
  return <User name="Captain" />;
}
```

### Child

```jsx
function User(props) {
  return <h1>Hello {props.name}</h1>;
}
```

### Data Flow

```text
Parent
   ↓
 Props
   ↓
Child
```

Props can contain:

* Strings
* Numbers
* Booleans
* Arrays
* Objects
* Functions
* React elements

---

# 📦 Props Destructuring

Instead of:

```jsx
function User(props) {
  return <h1>{props.name}</h1>;
}
```

we can use destructuring:

```jsx
function User({ name }) {
  return <h1>{name}</h1>;
}
```

This makes components cleaner and easier to read.

---

# 🔒 Props are Read-Only

Props should be treated as **read-only values**.

The child component should not modify the props it receives.

```jsx
function User({ name }) {
  // ❌ Don't modify props
  name = "Another Name";
}
```

The parent owns the data and passes it to the child.

---

# 🕳️ Props Drilling

Props drilling happens when data is passed through multiple components just to reach a deeply nested component.

```text
App
 ↓
Parent
 ↓
Child
 ↓
GrandChild
```

### Example

```jsx
function App() {
  const username = "Captain";

  return <Parent username={username} />;
}

function Parent({ username }) {
  return <Child username={username} />;
}

function Child({ username }) {
  return <GrandChild username={username} />;
}

function GrandChild({ username }) {
  return <h1>Hello {username}</h1>;
}
```

Here, `Parent` and `Child` do not actually use `username`.

They only pass it forward.

This is called **Props Drilling**.

---

# 📅 Day 2 — Axios, Promises, `useEffect()` & React Toastify

## 📚 Topics Covered

* Promises
* `async/await`
* Axios
* API Requests
* `useEffect()`
* Fetching API Data
* Storing API Data in State
* Rendering API Data using `.map()`
* React Toastify

---

# 🌐 Axios

Axios is a JavaScript library used to make HTTP requests to APIs.

### Installation

```bash
npm install axios
```

### Example

```jsx
import axios from "axios";

async function getData() {
  const response = await axios.get(
    "https://picsum.photos/v2/list?page=2&limit=30"
  );

  console.log(response.data);
}
```

### API Request Flow

```text
React Component
      ↓
    Axios
      ↓
 API Request
      ↓
 API Response
      ↓
response.data
      ↓
  setData()
      ↓
 React Re-renders
      ↓
      UI
```

---

# ⏳ Promises

API requests are asynchronous operations.

A **Promise** represents the eventual result of an asynchronous operation.

A Promise has three states:

```text
Promise
  │
  ├── Pending
  ├── Fulfilled
  └── Rejected
```

Using `async/await` makes asynchronous code easier to read.

```jsx
async function getData() {
  const response = await axios.get(API);

  setData(response.data);
}
```

`await` pauses execution of the async function until the Promise settles.

---

# 🪝 `useEffect()`

`useEffect()` is a React Hook used to perform **side effects** in a component.

Examples of side effects include:

* API requests
* Timers
* Event listeners
* Synchronizing with external systems

One common use case is fetching API data when a component loads.

```jsx
useEffect(() => {
  getData();
}, []);
```

The empty dependency array:

```jsx
[]
```

means the effect does not re-run because of changes to state or props dependencies.

### API Fetching Flow

```text
Component Renders
       ↓
useEffect()
       ↓
getData()
       ↓
Axios Request
       ↓
API Response
       ↓
setData()
       ↓
React Re-renders
       ↓
data.map()
       ↓
Display Data
```

---

# 🔄 Rendering API Data

API data can be stored using `useState()`:

```jsx
const [data, setData] = useState([]);
```

After receiving the API response:

```jsx
setData(response.data);
```

The data can then be rendered using `.map()`:

```jsx
{data.map((item) => {
  return (
    <div key={item.id}>
      <img src={item.download_url} alt="" />
      <h1>{item.author}</h1>
    </div>
  );
})}
```

### Complete Concept

```text
Axios
  ↓
Get API Data
  ↓
useState
  ↓
Store Data
  ↓
map()
  ↓
Render Data
```

---

# 🔔 React Toastify

React Toastify is used to display temporary notifications in React applications.

### Installation

```bash
npm install react-toastify
```

### Import

```jsx
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
```

### Add Container

```jsx
<ToastContainer />
```

### Show Notifications

```jsx
toast.success("Data fetched successfully!");

toast.error("Something went wrong!");

toast.warning("Please check your input!");

toast.info("Information message");
```

### Axios + Toastify

```jsx
async function getData() {
  try {
    const response = await axios.get(API);

    setData(response.data);

    toast.success("Data fetched successfully!");
  } catch (error) {
    toast.error("Failed to fetch data!");
  }
}
```

Axios handles **API communication**, while Toastify handles **user notifications**.

---

# 📅 Day 3 — React Router DOM

## 📚 Topics Covered

* React Router DOM
* `BrowserRouter`
* `Routes`
* `Route`
* `Link`
* `useNavigate()`
* `useParams()`
* Dynamic Routes
* Client-Side Navigation

---

# 🚦 React Router DOM

React Router DOM is used to handle routing and navigation in React applications.

Example:

```text
/             → Home
/about        → About
/services     → Services
/contact      → Contact
```

---

# 🌐 `BrowserRouter`

`BrowserRouter` enables routing functionality in a React application.

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

It provides the routing context required by React Router components and hooks.

---

# 🛣️ `Routes` and `Route`

`Routes` contains the application's route definitions.

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
</Routes>
```

A `Route` connects a URL path with a React element.

```text
/about
   ↓
About Component
```

---

# 🔗 `Link`

React Router provides the `Link` component for navigation.

Instead of:

```jsx
<a href="/about">About</a>
```

we can use:

```jsx
<Link to="/about">About</Link>
```

`Link` allows navigation through React Router without performing a traditional full-page navigation.

---

# 🧭 `useNavigate()`

`useNavigate()` allows navigation programmatically.

```jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/dashboard");
  }

  return (
    <button onClick={handleLogin}>
      Login
    </button>
  );
}
```

### Flow

```text
Button Click
     ↓
handleLogin()
     ↓
navigate("/dashboard")
     ↓
Dashboard
```

---

# 🔢 Dynamic Routes & `useParams()`

Dynamic routes allow values to be included in the URL.

```jsx
<Route
  path="/products/:id"
  element={<Product />}
/>
```

Examples:

```text
/products/1
/products/2
/products/50
```

The dynamic `id` can be accessed using `useParams()`:

```jsx
import { useParams } from "react-router-dom";

function Product() {
  const { id } = useParams();

  return <h1>Product ID: {id}</h1>;
}
```

---

# 📅 Day 4 — React Context API

## 📚 Topics Covered

* Context API
* `createContext()`
* Context Provider
* `useContext()`
* `children`
* Sharing Data Between Components
* Avoiding Props Drilling
* Multiple Contexts
* Context Scope

---

# 🌳 Context API

The Context API allows data to be shared between components without manually passing props through every level of the component tree.

It is useful when many components need access to the same data.

### Common Use Cases

* User information
* Authentication
* Theme
* Shopping Cart
* Application settings

---

# 🏗️ Creating a Context

A Context can be created using `createContext()`.

```jsx
import { createContext } from "react";

export const DataContext = createContext();
```

This creates a Context object that can later provide and consume data.

---

# 📤 Context Provider

The Provider supplies data to components inside it.

```jsx
const userData = {
  username: "Captain",
  age: 21,
  city: "Miraj"
};

<DataContext.Provider value={userData}>
  {children}
</DataContext.Provider>
```

The `value` prop contains the data that will be shared.

---

# 👶 `children`

The `children` prop represents the content placed inside a component.

For example:

```jsx
<UserContext>
  <App />
</UserContext>
```

Here:

```text
children = <App />
```

Therefore:

```jsx
const UserContext = ({ children }) => {
  const userData = {
    username: "Captain",
    age: 21,
    city: "Miraj"
  };

  return (
    <DataContext.Provider value={userData}>
      {children}
    </DataContext.Provider>
  );
};
```

The `App` component becomes a child of the Context Provider.

---

# 📥 `useContext()`

`useContext()` is used to consume data from a Context.

```jsx
import { useContext } from "react";
import { DataContext } from "./context/UserContext";

const App = () => {
  const data = useContext(DataContext);

  return (
    <h1>
      This is App {data.username}
    </h1>
  );
};

export default App;
```

The value provided by:

```jsx
<DataContext.Provider value={userData}>
```

is received using:

```jsx
const data = useContext(DataContext);
```

---

# 🔄 Context Data Flow

```text
createContext()
      ↓
DataContext
      ↓
Provider
      ↓
value={userData}
      ↓
Components inside Provider
      ↓
useContext(DataContext)
      ↓
Access Shared Data
```

---

# 🌳 Wrapping the Application

The Provider can wrap the application in `main.jsx`.

```jsx
createRoot(document.getElementById("root")).render(
  <UserContext>
    <App />
  </UserContext>
);
```

This creates the following structure:

```text
UserContext
     │
     ↓
    App
  ┌──┼────┐
  ↓  ↓    ↓
Header Section Footer
```

Since these components are descendants of `UserContext`, they can consume the Context using `useContext()`.

---

# 🕳️ Props Drilling vs Context API

### Props Drilling

```text
App
 ↓ props
Parent
 ↓ props
Child
 ↓ props
GrandChild
```

The intermediate components may not even use the data.

### Context API

```text
        Context Provider
              │
              ↓
             App
        ↙     ↓     ↘
    Header  Section  Footer
       │       │       │
       └── useContext ─┘
```

Context allows components to access shared data without manually passing props through intermediate components.

---

# 🔗 Multiple Contexts

A React application can have multiple Contexts.

For example:

```text
UserContext
ThemeContext
CartContext
AuthContext
```

They can be nested:

```jsx
<UserContext>
  <ThemeContext>
    <CartContext>
      <App />
    </CartContext>
  </ThemeContext>
</UserContext>
```

The `App` and its descendants can access the contexts whose Providers contain them.

A Context does not necessarily have to wrap the entire application.

It can be scoped to only the part of the component tree that needs it.

### Example

```text
UserContext
│
├── Navbar
│
├── CartContext
│     ├── Products
│     └── Cart
│
└── Footer
```

Here:

* `Navbar` can access `UserContext`
* `Products` can access `UserContext` and `CartContext`
* `Cart` can access `UserContext` and `CartContext`
* `Footer` can access `UserContext`

---

# 🧠 Context API Core Pattern

The most important Context API pattern is:

```text
createContext()
      ↓
   Provider
      ↓
  useContext()
```

### `createContext()`

Creates the Context.

### Provider

Provides/shares the data.

### `useContext()`

Consumes the shared data.

---

# 🧠 Key Learnings

```text
Components       → Reusable UI
JSX              → UI inside JavaScript
Props            → Parent → Child data
State            → Component's changing data
Hooks            → React features for functional components
Fragments        → Group JSX without extra DOM elements
Tailwind         → Utility-first CSS
Props Drilling   → Passing props through unnecessary layers

Axios            → API communication
Promises         → Handle asynchronous operations
async/await      → Work with asynchronous operations
useEffect        → Handle side effects
map()            → Render collections of data
Toastify         → User notifications

React Router     → Client-side routing
BrowserRouter    → Provides routing context
Routes / Route   → Define application routes
Link             → Navigate between routes
useNavigate      → Navigate programmatically
useParams        → Read dynamic route parameters

Context API      → Share data across components
createContext    → Create a Context
Provider         → Provide shared data
useContext       → Consume shared data
children         → Components passed inside a component
```

---

# 📈 Learning Progress

## Day 1 — React Fundamentals ✅

```text
React Basics       ████████████████████ 100%
JSX                ████████████████████ 100%
Components         ████████████████████ 100%
Hooks Basics       ████████████████████ 100%
Tailwind Setup     ████████████████████ 100%
Props              ████████████████████ 100%
Props Drilling     ████████████████████ 100%
```

## Day 2 — API & Effects ✅

```text
Axios              ████████████████████ 100%
Promises           ████████████████████ 100%
async/await        ████████████████████ 100%
useEffect          ████████████████████ 100%
API Data Rendering ████████████████████ 100%
React Toastify     ████████████████████ 100%
```

## Day 3 — Routing ✅

```text
React Router DOM   ████████████████████ 100%
BrowserRouter      ████████████████████ 100%
Routes / Route     ████████████████████ 100%
Link               ████████████████████ 100%
useNavigate        ████████████████████ 100%
useParams          ████████████████████ 100%
Dynamic Routes     ████████████████████ 100%
```

## Day 4 — Context API ✅

```text
createContext      ████████████████████ 100%
Provider           ████████████████████ 100%
useContext         ████████████████████ 100%
children           ████████████████████ 100%
Props Drilling Fix ████████████████████ 100%
Multiple Contexts  ████████████████████ 100%
Context Scope      ████████████████████ 100%
```

---

# 🚀 React Fundamentals Completed

The major React concepts covered so far:

```text
React
 │
 ├── Components
 │
 ├── JSX
 │
 ├── Fragments
 │
 ├── Props
 │    └── Props Drilling
 │
 ├── State
 │    └── useState()
 │
 ├── Effects
 │    └── useEffect()
 │
 ├── API Communication
 │    └── Axios
 │
 ├── Async JavaScript
 │    ├── Promises
 │    └── async/await
 │
 ├── Notifications
 │    └── React Toastify
 │
 ├── Routing
 │    └── React Router DOM
 │
 └── Shared Data
      └── Context API
           ├── createContext()
           ├── Provider
           └── useContext()
```

---

# 🛠️ Technologies & Tools

The technologies used during this learning journey include:

* ⚛️ React.js
* 🟨 JavaScript
* 🎨 Tailwind CSS
* 🌐 Axios
* 🛣️ React Router DOM
* 🔔 React Toastify
* ⚡ Vite
* 🧑‍💻 VS Code
* 🐙 Git & GitHub

---

# 🎯 Next Learning Goals

After completing the current React fundamentals, the next focus areas are:

* [ ] Strengthen React fundamentals through projects
* [ ] Form Handling
* [ ] Controlled Components
* [ ] Form Validation
* [ ] More React Hooks
* [ ] Custom Hooks
* [ ] Advanced API Integration
* [ ] Loading & Error States
* [ ] Authentication
* [ ] State Management
* [ ] Practical React Projects
* [ ] Performance Optimization
* [ ] Next.js
* [ ] MERN Stack Integration

---

# 🗺️ Long-Term Learning Path

```text
React Fundamentals
        ↓
Advanced React
        ↓
Projects
        ↓
Authentication
        ↓
State Management
        ↓
API Integration
        ↓
Next.js
        ↓
MERN Stack
        ↓
Full-Stack Applications
```

---

# 💡 Learning Philosophy

> **Learn → Build → Break → Debug → Understand → Repeat**

The goal is not just to complete a React course, but to understand **why React works, how its concepts connect, and how to apply them while building real-world applications.**

---

# 📌 Repository Purpose

This repository serves as my personal React learning journal.

I will continuously update it with:

* 📚 New concepts
* 🧠 Important notes
* 💻 Code examples
* 🐛 Errors and solutions
* 🛠️ Mini-projects
* 🚀 Real-world implementations
* 📈 Learning progress

---

# 🚀 Progress So Far

```text
Day 1 → React Fundamentals        ✅
Day 2 → APIs & Effects             ✅
Day 3 → Routing                    ✅
Day 4 → Context API                ✅
Day 5 → Coming Soon                ⏳
```

---

## ⭐ Final Note

> **Learning React one concept at a time — building, experimenting, debugging, and documenting along the way.**

### 🚀 Keep Learning. Keep Building. Keep Shipping.
