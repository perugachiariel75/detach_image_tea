const express = require('express');
const multer = require('multer');
const imageProcessor = require('./imageProcessor');
const textRecognizer = require('./textRecognizer');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('image'), async (req, res) => {
    const processedImagePath = await imageProcessor.process(req.file.path);
    const text = await textRecognizer.recognize(processedImagePath);
    res.json({ text });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
