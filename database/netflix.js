var express = require("express");
var cors = require("cors");
var mongoClient = require("mongodb").MongoClient;

var conString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/admin", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("angular-netflix");
    database
      .collection("tbladmin")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/users", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("angular-netflix");
    database
      .collection("tblusers")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/categories", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("angular-netflix");
    database
      .collection("tblcategories")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/videos", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("angular-netflix");
    database
      .collection("tblvideos")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/tvShows", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("angular-netflix");
    database
      .collection("tbltvshows")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/videos/:id", (req, res) => {
  var id = parseInt(req.params.id);
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("angular-netflix");
    database
      .collection("tblvideos")
      .find({ videoId: id })
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.post("/adduser", (req, res) => {
  var user = {
    //userId: req.body.userId,
    userName: req.body.userName,
    password: req.body.password,
    mobile: req.body.mobile,
    email: req.body.email,
  };
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("angular-netflix");
    database
      .collection("tblusers")
      .insertOne(user)
      .then(() => {
        console.log("user added successfully");
        res.redirect("/users");
        res.end();
      });
  });
});

app.post("/addcategory", (req, res) => {
  var category = {
    category_Id: parseInt(req.body.category_Id),
    categoryName: req.body.categoryName,
  };
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("angular-netflix");
    database
      .collection("tblcategory")
      .insertOne(category)
      .then(() => {
        console.log("category added successfully");
        res.redirect("/categories");
        res.end();
      });
  });
});

app.post("/addvideo", (req, res) => {
  var user = {
    videoId: parseInt(req.body.videoId),
    title: req.body.title,
    urlPath: req.body.urlPath,
    comments: req.body.comments,
    likes: parseInt(req.body.likes),
    category_Id: parseInt(req.body.category_Id),
  };
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("angular-netflix");
    database
      .collection("tblvideos")
      .insertOne(user)
      .then(() => {
        console.log("video added successfully");
        res.redirect("/videos");
        res.end();
      });
  });
});

app.put("/editvideo/:id", (req, res) => {
  var id = parseInt(req.params.id);
  mongoClient
    .connect(conString)
    .then((clientObj) => {
      var database = clientObj.db("reactdb");
      database.collection("tblvideos").updateOne(
        { videoId: id },
        {
          $set: {
            videoId: parseInt(req.body.videoId),
            title: req.body.title,
            urlPath: req.body.urlPath,
            comments: req.body.comments,
            likes: parseInt(req.body.likes),
            category_Id: parseInt(req.body.category_Id),
          },
        }
      );
    })
    .then(() => {
      console.log("video updated successfully");
      res.redirect("/videos");
      res.end();
    });
});

app.delete("/deletevideo/:id", (req, res) => {
  var id = parseInt(req.params.id);
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("reactdb");
    database
      .collection("tblvideos")
      .deleteOne({ videoId: id })
      .then(() => {
        console.log("video deleted");
        res.redirect("/videos");
        res.end();
      });
  });
});

app.listen(2000);
console.log(`Server has been started : http://1270.0.0.1:2000`);
