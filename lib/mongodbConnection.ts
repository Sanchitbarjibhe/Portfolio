import { MongoClient, Db } from 'mongodb';


const MONGODB_URI: string = 'mongodb+srv://sanchit:DgR4okpGgzv2gLw8@cluster0.rynyd4t.mongodb.net/';


let client: MongoClient | undefined;
let db: Db;

export async function mongodbConnection(): Promise<{ client: MongoClient, db: any }> {
    if (!client) {
        client = await MongoClient.connect(MONGODB_URI);
        db = client.db('personal');
    }
    return { client, db };
}