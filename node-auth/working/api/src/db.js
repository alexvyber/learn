import { MongoClient } from "mongodb"

const url = process.env.MONGO_URL

export const client = new MongoClient(url)

export async function connectDb() {
  try {
    await client.connect()

    // Confirm connection
    await client.db("admin").command({ ping: 1 })
    console.log("🔥 DB Conected")
  } catch (e) {
    console.error(e)
    // Close connection if error
    await client.close()
  }
}
