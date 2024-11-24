# Invoice Management System Backend

This is the backend for the **Invoice Management System**, developed using Node.js and Express.js. The backend handles CRUD operations for invoices, connects to a MongoDB database, and exposes RESTful APIs for frontend integration.

## Features

- **Invoice CRUD Operations**
    - Create, read, update, and delete invoices.

- **Filtering and Pagination** 
    - Filter invoices by status.
    - Support for paginated results.

- **Search Functionality**
    - Search invoices by vendor name or invoice number.

- **Scalable and Maintainable**
    - Built with modular and RESTful principles.


## Technologies Used

- **Node.js** - JavaScript runtime.
- **Express.js** - Web framework for building APIs.
- **MongoDB** - NoSQL database for data storage.
- **Mongoose** - MongoDB object modeling for Node.js.
- **dotenv** - Environment variable management.


## Installation

Follow the steps below to set up and run the backend locally:

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)

### Steps

1. **Clone the repository:**
```bash
git clone https://github.com/saurabh78crypto/invoice-management-backend.git
cd invoice-management-backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
 - Create a .env file in the root directory and add the following:
```js
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/invoiceDB?retryWrites=true&w=majority
```
 - Replace `<username>` and `<password>` with your MongoDB credentials.

4. **Start the server:**
```bash
npm start
```

5. The server will run at `http://localhost:3000`.


### Scripts

- **npm start:** Start the production server
- **npm run dev:** Start the server in development mode (using nodemon)
- **npm test:** Run test cases (if tests are written)