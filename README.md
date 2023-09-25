# Library App

The Library App is a simple web-based library management system that allows users to reserve books, add comments, and like books. The application supports multiple user roles, including admin, userOne, and guest, each with different levels of access and functionality.

## Features

- **User Authentication:** Users can log in as admin, userOne, or guest to access different functionalities.
- **Admin Functions:**
  - Add new books to the library collection.
  - Delete books from the library.
  - Reserve books.
  - Can see the all reserved books list.
- **UserOne Functions:**
  - View the list of books.
  - Reserve books.
  - Can see the all reserved books list by the the user.
  - Add comments to books.
  - Like books.
- **Guest Functions:**
  - View the list of available books.
  - View comments on books.
- **Database Integration:** The application uses MongoDB to store book and user data.
- **Frontend:** Built with Vue.js, providing a responsive and user-friendly interface.
- **Backend:** Minimal Node.js backend for database connectivity.
- **State Management:** Utilizes Pinia for state management within the Vue.js application.


## Project Structure

The project is structured as follows:

- `frontend/`: Contains the Vue.js frontend application.
  - `src/`: Source code for Vue components, Pinia store, and views.
    - `components/`: Vue components for Admin, UserOne, Guest, and BookList.
    - `store/`: Pinia store for user authentication.
    - `views/`: Vue views for AdminPage, UserPage, GuestPage, etc.
    - `App.vue`: Main Vue app component.
    - `main.js`: Vue app setup with Pinia.
  - ...

- `backend/`: Contains the Node.js backend for database connectivity.
  - `index.js`: Minimal Node.js server with MongoDB connectivity.



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
