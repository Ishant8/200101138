const express = require('express');
const app = express();

const apiRoutes = require('./railway_dashboard/routes/railway-service-routes');
const port = process.env.PORT || 4000;

const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

app.use('/api/railway-service', apiRoutes);



app.listen(port,()=>{
    console.log("Server started on port !", port)
})