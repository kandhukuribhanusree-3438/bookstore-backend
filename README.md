# Bookstore Backend API

Node.js + Express + MongoDB backend for Simple Online Bookstore.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```
MONGO_URI=your_mongodb_atlas_connection_string
PORT=5000
```

3. Seed database (optional):
```bash
node seed.js
```

4. Start server:
```bash
npm start
# Or for development:
npm run dev
```

## API Endpoints

- `GET /api/books` - Fetch all books
- `POST /api/orders` - Create a new order
- `GET /api/orders` - Get all orders (optional)

## Deployment to Render

1. Push `/backend` folder to GitHub
2. Create new Web Service on Render
3. Set Root Directory: `backend`
4. Start Command: `node server.js`
5. Add environment variable: `MONGO_URI`

