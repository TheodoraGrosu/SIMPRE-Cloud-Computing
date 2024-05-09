import { connectToDatabase } from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
    const { database } = await connectToDatabase();
    console.log('Request body:', req.body);

    if (req.method === 'POST') {
        const { uid, email, loginAt } = req.body;
        const collection = database.collection('loginRecords');

        try {
            const result = await collection.insertOne({ uid, email, loginAt });
            console.log('Insert result:', result);
            res.status(200).json({ message: 'Record added', id: result.insertedId });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).end(); // Metoda HTTP nu este permisă
    }
}

