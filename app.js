const express = require ("express");
const app = express();
const path = require ("path");
app.use(express.static("public"));
const PORT = process.env.PORT || 3000;

app.listen (process.env.PORT || 3000, function (){
    console.log("servidor corriendo en el puerto 3000");
})
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname,"./views/home.html"))
});

app.get("/login",(req, res) => { 
    res.sendFile(path.join(__dirname,"./views/login.html"))
});
app.get("/register", function (req, res) {
    res.sendFile(path.join(__dirname, "/views", "/register.html"));
  });
