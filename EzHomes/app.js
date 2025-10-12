const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const MONGO_URL = "mongodb://127.0.0.1:27017/EzHomes";
const Listing = require("./models/listings");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
const ejsMate = require("ejs-mate");
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, 'public')));
// mongoose connection

async function main() {
  await mongoose.connect(MONGO_URL);
}
main()
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
// Root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// landing route
app.get("/listings", async (req, res) => {
  const allListing = await Listing.find({});
  res.render("listing/index.ejs", { allListing });
});
//new route
app.get("/listings/new", (req, res) => {
  res.render("listing/new.ejs");
});
app.post("/listings", async (req, res) => {
  //NEW LEARNING- Model.create()
  await Listing.create(req.body);
  res.redirect("/listings");
});
// show route
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listing/show.ejs", { listing });
});
//edit route
app.get("/listings/:id/edit", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listing/edit.ejs", { listing });
});
//put  edit route
app.put("/listings/:id", async (req, res) => {
  const updatedListing = await Listing.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  // console.log(updatedListing);
  res.redirect("/listings");
});
//delete route
app.delete("/listings/:id", async (req, res) => {
  let { id } = req.params;
  let deletedlist = await Listing.findByIdAndDelete(id);
  // console.log(deletedlist);
  res.redirect("/listings");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
