// server.js

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const speciesRoutes = require('./routes/speciesRoutes');
const rangeRoutes = require('./routes/rangeRoutes');
const observationRoutes = require('./routes/observationRoutes');
const rangeDataRoutes = require('./routes/rangeDataRoutes');
const speciesRangeRoutes = require('./routes/speciesRangeRoutes');
const observationDownloadRoutes = require('./routes/observationDownloadRoutes');
const rangeDownloadRoutes = require('./routes/rangeDownloadRoutes');
const traitDownloadRoutes = require('./routes/traitDownloadRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();

const port = process.env.PORT || 3005;

const allowedOrigins = ['https://biendata.org'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type'],
}));

app.use(express.json());

// Routes
app.use('/api/species', speciesRoutes);
app.use('/api/range', rangeRoutes);
app.use('/api/range', rangeDataRoutes);
app.use('/api/species-ranges', speciesRangeRoutes);
app.use('/api/observations', observationRoutes);
app.use('/api/download', observationDownloadRoutes);
app.use('/api/download', rangeDownloadRoutes);
app.use('/api/download', traitDownloadRoutes);



// Error handling middleware
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
