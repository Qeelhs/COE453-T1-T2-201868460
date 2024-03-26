const express = require('express');
const app = express();

app.use(express.json());

app.post('/mul', (req, res) => {
  const { X, Y } = req.body;
  const result = X * Y;
  res.json({ X, Y, Result: result });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
