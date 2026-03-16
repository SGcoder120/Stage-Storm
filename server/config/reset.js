import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import { pool } from './database.js'
import { events, locations } from './data.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const createTables = async () => {
  const createLocationsTable = `
    DROP TABLE IF EXISTS events;
    DROP TABLE IF EXISTS locations;

    CREATE TABLE IF NOT EXISTS locations (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      address VARCHAR(255) NOT NULL,
      city VARCHAR(100) NOT NULL,
      state VARCHAR(50) NOT NULL,
      zip VARCHAR(20) NOT NULL,
      image TEXT NOT NULL
    );
  `

  const createEventsTable = `
    CREATE TABLE IF NOT EXISTS events (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      date VARCHAR(50) NOT NULL,
      time VARCHAR(50) NOT NULL,
      image TEXT NOT NULL,
      location_id INTEGER NOT NULL REFERENCES locations(id) ON DELETE CASCADE
    );
  `

  const buildInsert = (table, columns, rows) => {
    if (!rows.length) return null

    const values = []
    const placeholders = rows.map((row, rowIndex) => {
      const rowPlaceholders = columns.map((column, colIndex) => {
        const valueIndex = rowIndex * columns.length + colIndex + 1
        values.push(row[column])
        return `$${valueIndex}`
      })
      return `(${rowPlaceholders.join(', ')})`
    })

    return {
      text: `INSERT INTO ${table} (${columns.join(', ')}) VALUES ${placeholders.join(', ')};`,
      values
    }
  }

  try {
    await pool.query(createLocationsTable)
    await pool.query(createEventsTable)
    const insertLocations = buildInsert(
      'locations',
      ['name', 'address', 'city', 'state', 'zip', 'image'],
      locations
    )
    const insertEvents = buildInsert(
      'events',
      ['title', 'date', 'time', 'image', 'location_id'],
      events
    )

    if (insertLocations) {
      await pool.query(insertLocations.text, insertLocations.values)
    }
    if (insertEvents) {
      await pool.query(insertEvents.text, insertEvents.values)
    }
    console.log('Tables created')
  } catch (error) {
    console.error('Error creating tables:', error)
  } finally {
    await pool.end()
  }
}

createTables()
