const mongoose = require('mongoose');
require('dotenv').config();
const Book = require('./models/Book');

const MONGO_URI = 'mongodb+srv://user:user123@cluster0.ekzy3km.mongodb.net/bookstore?retryWrites=true&w=majority';

const sampleBooks = [
  {
    title: 'JavaScript: The Complete Guide',
    category: 'Programming Languages',
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400'
  },
  {
    title: 'Python for Beginners',
    category: 'Programming Languages',
    price: 24.99,
    imageUrl: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400'
  },
  {
    title: 'Angular Development Essentials',
    category: 'Web Technology',
    price: 34.99,
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400'
  },
  {
    title: 'React Mastery Course',
    category: 'Web Technology',
    price: 32.99,
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400'
  },
  {
    title: 'Data Structures & Algorithms',
    category: 'DSA',
    price: 39.99,
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400'
  },
  {
    title: 'Machine Learning Fundamentals',
    category: 'AI, ML & Data Science',
    price: 44.99,
    imageUrl: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=400'
  },
  {
    title: 'Deep Learning with Python',
    category: 'AI, ML & Data Science',
    price: 49.99,
    imageUrl: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400'
  },
  {
    title: 'Docker & Kubernetes Guide',
    category: 'DevOps',
    price: 37.99,
    imageUrl: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400'
  },
  {
    title: 'Computer Networks Basics',
    category: 'CS Core Subjects',
    price: 28.99,
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400'
  },
  {
    title: 'Operating Systems Explained',
    category: 'CS Core Subjects',
    price: 31.99,
    imageUrl: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=400'
  },
  {
    title: 'GATE Computer Science Guide',
    category: 'GATE',
    price: 54.99,
    imageUrl: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400'
  },
  {
    title: 'Mathematics for Programming',
    category: 'School Subjects',
    price: 22.99,
    imageUrl: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400'
  },
  {
    title: 'Git & GitHub Tutorial',
    category: 'Tutorials',
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=400'
  },
  {
    title: 'VS Code Mastery',
    category: 'Software & Tools (Beginner)',
    price: 17.99,
    imageUrl: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400'
  },
  {
    title: 'Node.js Complete Course',
    category: 'Web Technology',
    price: 36.99,
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400'
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // Clear existing books
    await Book.deleteMany({});
    console.log('Cleared existing books');

    // Insert sample books
    await Book.insertMany(sampleBooks);
    console.log('Sample books inserted successfully');

    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();

