const express = require("express")
const app = express()
const cors = require('cors');
var db = require("./db.js")

app.post('/save', (req,res) => {

    resultat = req.body
    console.log(resultat)
    res.send('Succes')
})

app.get('/test', (req,res) => {
    var sql = "select * from stock"
    var params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
    
})


app.use(cors({
    origin: '*'
}));

app.listen(3001, () => {
    console.log("Serveur à l'écoute")
  })

