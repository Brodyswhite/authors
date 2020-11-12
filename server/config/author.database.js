const mongoose = require('mongoose');

const database = "Author";
mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(res => console.log("You are now in the mainframe"))
    .catch(err => console.log(`nah fam ${err}`))