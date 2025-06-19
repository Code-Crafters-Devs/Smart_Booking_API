const { Client } = require('pg'); // PostgreSQL client
const fs = require('fs');
const path = require('path');

const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

async function migrate() {
    try {
        await client.connect();
        console.log('Connected to the database.');

        const migrationsDir = path.join(__dirname, 'migrations');
        const files = fs.readdirSync(migrationsDir);

        for (const file of files) {
            const filePath = path.join(migrationsDir, file);
            const sql = fs.readFileSync(filePath, 'utf8');
            await client.query(sql);
            console.log(`Migration ${file} executed successfully.`);
        }

        console.log('All migrations executed successfully.');
    } catch (error) {
        console.error('Error executing migrations:', error);
    } finally {
        await client.end();
        console.log('Database connection closed.');
    }
}

migrate();