const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = {
    title: String,
    content: String
};

const Article = new mongoose.model("Article", articleSchema);


app.get("/articles", function (req, res) {
    Article.find(function (err, foundArticle) {
        if (!err) {
            res.send(foundArticle);
        }else{
            res.send(err);
        }
    });
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});