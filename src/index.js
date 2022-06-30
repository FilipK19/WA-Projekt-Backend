import express from "express";
import cors from "cors";
import mongo from "mongodb";

import connect from "./db.js";

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.get("/test", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("test");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.get("/profil", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("profil");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.get("/rent", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("rent");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.post("/rent/add", async (req, res) =>{
  let doc = req.body;
  console.log(doc);

  let db = await connect();
  let kolekcija = db.collection("rent");

  let result = await kolekcija.insertOne(doc);

  res.status(201);
  res.send();
});

app.get("/upecane/ribe", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("upecano");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.post("/upecane/ribe", async (req, res) =>{
  let doc = req.body;
  console.log(doc);

  let db = await connect();
  let kolekcija = db.collection("upecano");

  let result = await kolekcija.insertOne(doc);

  res.status(201);
  res.send();
});

app.get("/trgovina", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("trgovina");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.post("/trgovina", async (req, res) =>{
  let doc = req.body;
  console.log(doc);

  let db = await connect();
  let kolekcija = db.collection("trgovina");

  let result = await kolekcija.insertOne(doc);

  res.status(201);
  res.send();
});

app.post("/test", async (req, res) =>{
  let doc = req.body;
  console.log(doc);

  let db = await connect();
  let kolekcija = db.collection("test");

  let result = await kolekcija.insertOne(doc);

  res.status(201);
  res.send();
});

app.put('/test/:id', async (req, res) => {
  let doc = req.body;
  delete doc._id;
  let id = req.params.id;
  let db = await connect();

  let result = await db.collection('test').replaceOne({ _id:
 mongo.ObjectId(id) }, doc);
  if (result.modifiedCount == 1) {
    res.json({
      status: 'success',
      id: result.insertedId,
    });
  } else {
    res.json({
      status: 'fail',
    });
  }
});

app.patch('/test/:id', async (req, res) => {
  let doc = req.body;
  delete doc._id;
  let id = req.params.id;
  let db = await connect();

  let result = await db.collection('test').updateOne(
    { _id: mongo.ObjectId(id) },
    {
    $set: doc,
   }
  );
  if (result.modifiedCount == 1) {
    res.json({
      status: 'success',
      id: result.insertedId,
    });
  } else {
    res.json({
      status: 'fail',
    });
  }
});

app.patch('/wallet/:id', async (req, res) => {
  let doc = req.body;
  delete doc._id;
  let id = req.params.id;
  let db = await connect();

  let result = await db.collection('wallet').updateOne(
    { _id: mongo.ObjectId(id) },
    {
    $set: doc,
   }
  );
  if (result.modifiedCount == 1) {
    res.json({
      status: 'success',
      id: result.insertedId,
    });
  } else {
    res.json({
      status: 'fail',
    });
  }
});

app.get("/wallet", async (req, res) => {
  let db = await connect();
  let kolekcija = db.collection("wallet");
  let cursor = await kolekcija.find();
  let data = await cursor.toArray();

  res.json(data);
});

app.delete('/test/:id', async (req, res) => {
  let db = await connect();
  let id = req.params.id;

  let result = await db.collection('test').deleteOne(
    { _id: mongo.ObjectId(id) },
    {
    $pull: { _id: mongo.ObjectId(id) },
    }
  );
  if (result.modifiedCount == 1) {
    res.statusCode = 201;
    res.send();
  } else {
    res.statusCode = 500;
    res.json({
      status: 'fail',
    });
  }
});

app.delete('/upecano/:id', async (req, res) => {
  let db = await connect();
  let id = req.params.id;

  let result = await db.collection('upecano').deleteOne(
    { _id: mongo.ObjectId(id) },
    {
    $pull: { _id: mongo.ObjectId(id) },
    }
  );
  if (result.modifiedCount == 1) {
    res.statusCode = 201;
    res.send();
  } else {
    res.statusCode = 500;
    res.json({
      status: 'fail',
    });
  }
});

app.get('/fish', (req, res) => {
    let ribe = [
      { vrsta: "Pastrva", voda: "Slatkovodna", lokacija: "Rijeke" },
      { vrsta: "Srdela", voda: "Slanovodna" },
      { vrsta: "Oslić", voda: "Slanovodna" },
      {vrsta: "brancin", voda: "Slanovodna", lokacija: "Istra, Kvarner JuznaDalamacija"},
      {vrsta: "orada", voda: "Slanovodna", lokacija: "Istra, Kvarner, JuznaDalmacija"},
      {vrsta: "zubatac", voda:"Slanovodna", lokacija: "Istra, JuznaDalmacija"},
      {vrsta: "cipal", voda: "Slanovodna", lokacija: "Istra, JuznaDalmacija"},
      {vrsta: "škarpina", voda: "Slanovodna", lokacija: "Istra, Kvarner, JuznaDalmacija"},
      {vrsta: "arbun", voda: "Slanovodna", lokacija: "Istra"},
      {vrsta: "trilja", voda: "Slanovodna", lokacija: "Istra, JuznaDalmacija"},
      {vrsta: "ugor", voda: "Slanovodna", lokacija: "Istra"},
      {vrsta: "morska mačka", voda: "Slanovodna", lokacija: "Kvarner"},
      {vrsta: "skuša", voda: "Slanovodna", lokacija: "Kvarner"},
      {vrsta: "tuna", voda: "Slanovodna", lokacija: "SrednaDalmacija"},
      {vrsta: "Špar", voda: "Slanovodna", lokacija: "SrednjaDalmacija"},
      {vrsta: "šaran", voda: "Slatkovodna", lokacija: "rijeke"},
      {vrsta: "som", voda: "Slatkovodna", lokacija: "rijeke"},
      {vrsta: "smuđ", voda: "Slatkovodna", lokacija: "rijeke"},
      {vrsta: "štuka", voda: "Slatkovodna", lokacija: "rijeke"},
      {vrsta: "kečiga", voda: "Slatkovodna", lokacija: "rijeke"},
      {vrsta: "lipljen", voda: "Slatkovodna", lokacija: "rijeke"},
      {vrsta: "mladica", voda: "Slatkovodna", lokacija: "rijeke"},
      {vrsta: "šaran", voda: "Slatkovodna", lokacija: "rijeke"},
    ];
    res.status(200);
  res.send(ribe)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})