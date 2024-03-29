require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoute = require('./routes/auth');
const resumeRoute = require('./routes/resumeDataHandler');
const offerLetterRoute = require('./routes/offerLetterDataHandler');
const getRoutes = require("./routes/getRoutes");
const port = 80 || process.env.PORT;
const connectDB = require('./config/db');
connectDB();



app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.use('/auth', authRoute);
app.use('/resume', resumeRoute);
app.use('/offer_letter', offerLetterRoute);
app.use('/edit', getRoutes);

app.listen(port, () => {
    console.log(`server started on port ${port}!`);
})