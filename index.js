import express from 'express';
import { engine } from 'express-handlebars';
const port = 3000;

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');




app.get('/', (req, res) => {
    res.render('home');
});
app.get('/news', (req, res) => {
    res.render('news');
});

app.listen(port, () => {
    console.log(` views connect on http://localhost:${port}`)
});