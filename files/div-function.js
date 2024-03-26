const functions = require('@google-cloud/functions-framework');

functions.http('div', (req, res) => {
    const { X, Y } = req.body;
    if (Y === 0) {
        res.status(400).send('Cannot divide by zero');
    } else {
        const result = X / Y;
        res.json({
            "X": X,
            "Y": Y,
            "Result": result
        });
    }
});
