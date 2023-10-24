const express = require('express');

//server
const app = express();

const port = process.env.PORT || 5000

app.listen(5000, console.log(`server is running on port ${port}`));

