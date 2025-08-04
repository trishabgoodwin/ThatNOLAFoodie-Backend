import db from "./client.js"
import { createUser } from "./queries/users.js"

await db.connect();
await seedUsers();
await db.end();
console.log("🌱 Database seeded. 🌱");

async function seedUsers() {
  await createUser({username:"trisha", password:"password1"})
  await createUser({username:"shazia", password:"password2"})
}