const express = require("express");
const serverless = require("serverless-http");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const http = require("http").createServer(app);
const PORT = process.env.PORT || 5000;
app.use(cors());

const Movie = require("./model/Movies");
const DB =
	"mongodb+srv://shailesh:gCGtFPod0TfjuIeF@cluster0.83bx4zf.mongodb.net/movies?retryWrites=true&w=majority";

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(require("./router/auth"));

app.get("/getAllMovies", async (req, res) => {
	const movies = await Movie.find({});
	res.send(movies);
});

http.listen(PORT, () => {
	console.log(`listening to PORT ${PORT}`);
});
