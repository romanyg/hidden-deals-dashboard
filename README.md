# Hidden Deals WordPress Dashboard

## Overview

This project demonstrates a React-based admin dashboard intended to be embedded inside WordPress.

* **React App**: Built with Vite, displays property listings in a table with basic filtering and sorting.
* **WordPress Plugin**: Will load and render the React app inside the WordPress admin panel.

---

## Setup

### React App

```bash
npm install
npm run dev
```

### WordPress Plugin Bundled with React App
```bash
cd react-app
npm run build
mv build ../wp-plugin
```

---

## TODO

* ~~Create WordPress plugin (add_menu_page + enqueue React build)~~ -- Done
* ~~Fix API fetch (currently not working)~~ -- Fixed
