const express = require("express");
require('dotenv').config();
const mongoose = require('mongoose');
const app = express();
const taskRoutes = require("./routes/taskRoutes");

//Middleware
app.use((req, res, next) => {
    console.log("path " + req.path + " mothod" + req.method);
    next();
 
});

app.use(express.json())

// app.get("/", (req,res) =>{
//     res.send("Hello world");
// });

//DB Connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("DB connected successfully listening to "+process.env.PORT);
            });
    })
    .catch((error)=>console.log(error));

    app.use("/api/tasks", taskRoutes);
    

