const express = require('express');
const app = express();

app.use(express.json());

app.post('/div', (req, res) => {
  const { X, Y } = req.body;
  const result = Y !== 0 ? (X / Y) : 'Cannot divide by zero';
  res.json({ X, Y, Result: result });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
