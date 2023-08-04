import { mongodbConnection } from 'lib/mongodbConnection';
import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const uri: string = 'mongodb+srv://sanchit:DgR4okpGgzv2gLw8@cluster0.rynyd4t.mongodb.net/';
const client = new MongoClient(uri);
const db = client.db('personal');
const contacts = db.collection('contacts')

export async function GET(request: any) {
    try {
        const qry = {};
        const contact = await contacts.find(qry).toArray();
        console.log(contact);
        return NextResponse.json({ contact, "success": true, })
    } catch (e) {
        console.log(e)
    }
}
export async function POST(request: any) {
    let body = await request.json();
    try {
        const contact = await contacts.insertOne(body)
        console.log(contact);
        return NextResponse.json({ contact, ok: true })
    } finally {
        // await client.close();
    }
}