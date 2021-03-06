const express = require("express");
const cors = require("cors");
const app = express();
const cohorts = require("./data/cohorts");

app.use(cors());



app.get("/", (req, res) => {
    res.json(cohorts);
});

app.get("/:id", (req, res) => {
    for (var i = 0; i < cohorts.data.length; i++) {
        if (cohorts.data[i].id == req.params.id) {
            return res.json({data: cohorts.data[i]});
        }
    }
    if(!cohorts.data[i]) {
        res.status(404);
        res.json({error: {message: "No record found!"}
        });
    }
});



app.listen(process.env.PORT || 3000, () => {
});
