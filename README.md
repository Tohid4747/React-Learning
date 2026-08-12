# ⚛️ React Learning Journey

This repository documents my journey of learning **React.js**, following the Sheryians Coding School React course and building concepts through hands-on practice.

---

## 📅 Day 1 — React Fundamentals

### 📚 Topics Covered

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

## ⚛️ React Basics

React is a **JavaScript library for building user interfaces** using reusable components.

```text
React Application
       ↓
   Components
       ↓
      JSX
       ↓
      UI
```

---

## 🧩 Components

A component is a **reusable and independent piece of UI**.

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

## 🧩 JSX

JSX allows us to write **HTML-like syntax inside JavaScript**.

```jsx
function App() {
  const name = "Captain";

  return <h1>Hello {name}</h1>;
}
```

JavaScript expressions can be placed inside `{}`.

### Important JSX Rules

```jsx
className="box"
```

is used instead of HTML's:

```html
class="box"
```

---

## 🧩 React Fragments

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

---

## 🪝 Hooks & `useState()`

Hooks allow functional components to use React features.

The first Hook learned:

```jsx
useState()
```

Example:

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

## 🎨 Tailwind CSS

Tailwind CSS is a **utility-first CSS framework**.

Tailwind was configured using:

```bash
npm install tailwindcss @tailwindcss/vite
```

Example:

```jsx
<h1 className="text-4xl font-bold text-blue-600">
  Hello Tailwind!
</h1>
```

### Common Classes Learned

| Class                 | Purpose              |
| --------------------- | -------------------- |
| `flex`                | Flexbox              |
| `w-full`              | Width: 100%          |
| `text-center`         | Center text          |
| `text-white`          | White text           |
| `font-bold`           | Bold text            |
| `py-4`                | Vertical padding     |
| `bg-gray-900`         | Dark background      |
| `gap-6`               | Gap between elements |
| `hover:text-blue-600` | Hover text color     |

---

## 🧭 Navbar Component

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

## 🦶 Footer Component

Created a simple reusable Footer component.

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

## 📦 Props

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

---

## 📦 Props Destructuring

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

---

## 🔒 Props are Read-Only

Props should not be directly modified by the child component.

```jsx
function User({ name }) {
  // ❌ Don't modify props
  name = "Another Name";
}
```

The parent provides the props.

---

## 🕳️ Props Drilling

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

Example:

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

Here, `Parent` and `Child` don't actually use `username`; they only pass it forward.

This is called **Props Drilling**.

---

## 🧠 Key Learnings

```text
Components → Reusable UI
JSX        → UI inside JavaScript
Props      → Parent → Child data
State      → Component's changing data
Hooks      → React features for functional components
Fragments  → Group JSX without extra DOM elements
Tailwind   → Utility-first CSS
Props Drill → Passing props through unnecessary component layers
```

---

## 📈 Progress

### Day 1

**React Fundamentals** ✅

```text
React Basics       ████████████████████ 100%
JSX                ████████████████████ 100%
Components         ████████████████████ 100%
Hooks Basics       ████████████████████ 100%
Tailwind Setup     ████████████████████ 100%
Props              ████████████████████ 100%
Props Drilling     ████████████████████ 100%
```

---

## 🚀 Next Topics

* Form Handling
* Two-Way Data Binding
* API Calling with Axios
* React Router DOM
* Context API
* More React Hooks
* Practical React Projects

---

> **Learning React one concept at a time — building, experimenting, and documenting along the way.** 🚀
