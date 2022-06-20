import express from "express";
import cors from "cors";

const app = express()
const port = 3000

app.use(express.json());
app.use(cors());

app.get('/ribe', (req, res) => {
    let ribe = [
      { vrsta: "Pastrva", voda: "Slatkovodna" },
      { vrsta: "Srdela", voda: "Slanovodna" },
    ];
    res.status(200);
  res.send(ribe)
})

app.get('/trgovina', (req, res,) => {
  let trgovina = [
    { artikl: {
      pecaljke: [
        {vrsta: "spinning", boja: "plava", cijena: "50.00"},
        {vrsta: "catfish", boja: "crvena", cijena: "500.00"},
        {vrsta: "sea", boja: "zelena", cijena: "30.00"}
      ],
      mamci: [
        {vrsta: "hardbait", boja: "crveni", cijena: "9.00"},
        {vrsta: "softbait", boja: "plavi", cijena: "5.00"}
      ],
      camciIVesla: [
        {vrsta: "camac", boja: "sivi", cijena: "500.00", velicina: "srednji"},
        {vrsta: "veslo", boja: "narandasta", cijena: "50.00", velicina: "malo"},
        {vrsta: "camac", boja: "smeda", cijena: "400.00", velicina: "mala"},
      ],
      odjeca: [
        {vrsta: "majica", boja: "crvena", cijena: "25.00"},
        {vrsta: "hlace", boja: "crno", cijena: "90.00"},
      ]
    }},
  ];
  res.status(200);
  res.send(trgovina)
}),

app.get('/profil', (req, res) => {
  let profil = [
    {podaci: [
      {ime: "Ivan", prezime: "Ivanic", korisnickoIme: "ivan69"}
    ],
    upecaneRibe: [
      { vrsta: "Pastrva", voda: "Slatkovodna", tezina: "500", mjesto: "Dunav" },
      { vrsta: "Pastrva", voda: "Slatkovodna", tezina: "300", mjesto: "Dunav" },
    ]}
  ];
  res.status(200);
res.send(profil)
}),

app.post('/profil', (req, res) => {
  let profil = [
    {upecaneRibe: [
      {vrsta: "Srdela", voda: "slanovodna", tezina: "50", mjesto: "Zadar"}
    ]}
  ]
  res.statusCode = 201;
  res.send(profil);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})