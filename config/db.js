const mongoose = require("mongoose")

const dbURI = 'mongodb+srv://ayushsharma:IkUhUuCMX90fbmX7@cluster0.wx4bb.mongodb.net/stocks?retryWrites=true&w=majority'

const options = {
    redonnectTries: Number.MAX_VALUE,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(dbURI, options).then(
    () => {
        console.log("connnection with Database established")
    },
    err => {
        console.log("Error connecting database due to:", err);
    }
)

require('../models/BroughtStock')
require('../models/SoldStock')