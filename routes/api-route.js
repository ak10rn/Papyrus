const db = require("../database");
const collection = db.collection("notes");

const router = require("express").Router();

router.route("/getNote/").get((req, res, next) => {
  let notes = [];
  collection
    .all()
    .then((cursor) => cursor.map((doc) => notes.push(doc)))
    .then(() => res.status(200).json(notes))
    .catch((err) => console.error("Failed to fetch documents:", err));
});

router.route("/getNote/:key").get((req, res, next) => {
  //console.log(req.params);
  const key = req.params.key;
  let notes = [];
  collection
    .all()
    .then((cursor) =>
      cursor.map((doc) => {
        if (key === doc._key) {
          notes.push(doc);
        }
        // console.log(key, doc._key);
      })
    )
    .then(() => res.status(200).json(notes))
    .catch((err) => console.error("Failed to fetch documents:", err));
});

router.route("/create/").post((req, res, next) => {
  console.log(req.body);

  const data = {
    title: req.body.title,
    body: req.body.body,
    date: new Date(),
  };

  collection
    .save(data)
    .then(console.log("note saved!!"))
    .catch((err) => console.log(err));
  res.end();
});

router.route("/getNote/:key").put((req, res, next) => {
  console.log(req.body);
  const data = {
    title: req.body.title,
    body: req.body.body,
    date: req.body.date,
  };

  collection
    .update(req.params.key, data)
    .then(console.log("note updated!!"))
    .catch((err) => console.log(err));
  res.end();
});

router.route("/getNote/:key").delete((req, res, next) => {
  //console.log(req.body);

  collection
    .remove(req.params.key)
    .then(console.log("note deleted!!"))
    .catch((err) => console.log(err));
  res.end();
});

module.exports = router;
