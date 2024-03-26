const express = require('express');
const app = express();
app.use(express.json());

app.post('/add', (req, res) => {
    const { X, Y } = req.body;
    const result = X + Y;
    res.json({ X, Y, Result: result });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
