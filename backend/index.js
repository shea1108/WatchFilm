const express = require('express');
const path = require('path');
const route = require('./routes');
const methodOverride = require('method-override');


const app = express();
const port = 3000; // Thiết lập cổng
const cors = require('cors');



app.use(cors());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(methodOverride('_method'));

app.use('/asset', express.static(path.join(__dirname, '../../asset')));


app.use(express.static(path.join(__dirname, 'dist')));

route(app);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html')); 
  });



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/home`);
  });
  