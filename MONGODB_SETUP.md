# MongoDB Atlas Setup Guide

## Your Connection String

You have been provided with this connection string:
```
mongodb+srv://226m1a0538_db_user:<db_password>@cluster0.ekzy3km.mongodb.net/?appName=Cluster0
```

## Steps to Setup

### 1. Get Your Password
- This is the password you created when setting up the database user `226m1a0538_db_user` in MongoDB Atlas
- If you forgot it, you'll need to reset it in MongoDB Atlas dashboard

### 2. Create the .env File

In the `backend` folder, create a file named `.env` with the following content:

```
MONGO_URI=mongodb+srv://226m1a0538_db_user:YOUR_ACTUAL_PASSWORD_HERE@cluster0.ekzy3km.mongodb.net/bookstore?retryWrites=true&w=majority
PORT=5000
```

**Important Notes:**
- Replace `YOUR_ACTUAL_PASSWORD_HERE` with your actual MongoDB password
- I've added `/bookstore` to specify the database name
- Added connection parameters `?retryWrites=true&w=majority` for better reliability

### 3. Example (if your password is "MyPass123")

Your `.env` file should look like:
```
MONGO_URI=mongodb+srv://226m1a0538_db_user:MyPass123@cluster0.ekzy3km.mongodb.net/bookstore?retryWrites=true&w=majority
PORT=5000
```

**⚠️ Security Note:** Make sure `.env` is in `.gitignore` (it already is) - never commit your password to GitHub!

### 4. Test the Connection

After creating the `.env` file, test it:

```bash
cd backend
node server.js
```

You should see: `MongoDB Connected Successfully`

### 5. Seed the Database (Optional)

To add sample books to your database:

```bash
node seed.js
```

This will add 15 sample books to your MongoDB Atlas database.

## Troubleshooting

**Connection Error?**
1. Check your password is correct (no typos)
2. Make sure IP whitelist in MongoDB Atlas includes your IP (or use 0.0.0.0/0 for all IPs during development)
3. Verify the username `226m1a0538_db_user` is correct
4. Ensure the cluster is running (not paused) in MongoDB Atlas

**Can't find .env file?**
- Make sure you're creating it in the `backend` folder
- On Windows, you might need to create it as `.env.` (with a dot at the end) or use `echo > .env` in command line

