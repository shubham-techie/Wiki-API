const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/wikiDB', { useNewUrlParser: true, useUnifiedTopology: true });

const articleSchema = {
    title: String,
    content: String
};

const Article = new mongoose.model("Article", articleSchema);

app.route("/articles")
    .get(function (req, res) {
        Article.find(function (err, foundArticle) {
            if (!err) {
                res.send(foundArticle);
            } else {
                res.send(err);
            }
        });
    })

    .post(function (req, res) {

        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });

        newArticle.save(function (err) {
            if (!err) {
                res.send("Successfully added a new article.");
            } else {
                res.send(err);
            }
        });
    })

    .delete(function (req, res) {
        Article.deleteMany(function (err) {
            if (!err) {
                res.send("Successfully deleted all articles.");
            } else {
                res.send(err);
            }
        });
    });



app.route("/articles/:articleTitle")
    .get((req, res) => {
        Article.findOne({ title: req.params.articleTitle }, function (err, foundArticle) {
            if (foundArticle) {
                res.send(foundArticle);
            } else {
                res.send("No such Article is found with that title." + err);
            }
        });
    })


    .put((req, res) => {
        Article.replaceOne(
            { title: req.params.articleTitle },
            {
                title: req.body.title,
                content: req.body.content
            },
            function (err, foundArticle) {
                if (!err) {
                    res.send("Successfully updated a article.");
                } else {
                    res.send("No such Article is found with that title." + err);
                }
            }
        );
    })


    .patch((req, res) => {
        Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body },
            function (err, foundArticle) {
                if (!err) {
                    res.send("Successfully updated article.");
                } else {
                    res.send("No such Article is found with that title." + err);
                }
            }
        );
    })


    .delete((req, res) => {
        Article.deleteOne(
            { title: req.params.articleTitle },
            function (err) {
                if (!err) {
                    res.send("Successfully deleted a article.");
                } else {
                    res.send("No such Article is found with that title." + err);
                }
            }
        );
    });



app.listen(3000, function () {
    console.log("Server is running on port 3000");
});