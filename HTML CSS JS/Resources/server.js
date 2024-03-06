
const express = require('express');
const app = express();
const PORT = 3000;
const cors = require('cors')

app.use(cors());

const sixNationsScores = [
  { date: '02/02/2024', match: 'France vs Ireland', score: '17 - 38' },
  { date: '03/02/2024', match: 'Italy vs England', score: '24 - 27' },
  { date: '03/02/2024', match: 'Wales vs Scotland', score: '26 - 27' },
  { date: '10/02/2024', match: 'Scotland vs France', score: '16 - 20' },
  { date: '10/02/2024', match: 'Italy vs Ireland', score: '0 - 36' },
  { date: '11/02/2024', match: 'Wales vs England', score: '14 - 16' },
  { date: '24/02/2024', match: 'Ireland vs Wales', score: '31 - 7' },
  { date: '24/02/2024', match: 'France vs Italy', score: '13 - 13' },
  { date: '25/02/2024', match: 'Scotland vs England', score: '21 - 30' },
];

app.get('/six-nations-scores', (req, res) => {
  const responseData = {
    sixNationsScores: sixNationsScores
  };
  res.json(responseData);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});