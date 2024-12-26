import mysql from 'mysql2/promise';

export const db = mysql.createPool({
  host: '167.71.23.192',
  user: 'Elmar',
  password: 'Elmar123',
  database: 'storydb',
});