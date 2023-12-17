const app = require('./app');
const port = process.env.PORT || 5556;

app.listen(port, () =>{
    console.log(`Server Running on port: ${port}`);
});