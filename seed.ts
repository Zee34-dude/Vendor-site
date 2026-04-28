import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { PRODUCTS } from './lib/data';
import Product from './lib/models/Product';
 
// Load env variables from .env.local
dotenv.config({ path: '.env.local' });

async function seed() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/localbiz";
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing products to prevent duplicates on multiple runs
    await Product.deleteMany({});
    console.log('Cleared existing products from database');

    // Filter out fields not in the schema (like 'id' and 'emoji' if they aren't in ProductSchema)
    const productsToInsert = PRODUCTS.map(p => ({
      name: p.name,
      price: p.price,
      description: p.description,
      image: p.image,
      category: p.category
    }));

    const result = await Product.insertMany(productsToInsert);
    console.log(`Successfully seeded ${result.length} products!`);

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit(0);
  }
}

seed();
