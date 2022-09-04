const express = require('express');
const path = require('path');
const app = express();
const reload = require('reload');



app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('pages/index', { head: "themas febrianto" })
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})
reload(app);