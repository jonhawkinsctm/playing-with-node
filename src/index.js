require("dotenv").config();

const app = require('./app')

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`App started on http://localhost:${PORT}`));
