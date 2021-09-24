const express = require('express');
const morgan = require('morgan');
const helmet = require("helmet");

const { Router } = require('express');
const router = Router();
const app = express();

app.use(helmet());
app.use(morgan('dev'));

router.get('/', (req, res) => { res.json('Hola mundo!') });

// Importación de rutas
const auth = require('./routes/auth');
const product = require('./routes/product');

app.use(router);
app.use(auth);
app.use(product);

app.set('port', 3000);
app.listen(3000, function (err) {
    if (err) {
        console.error(err);
    } else {
        console.log('Server listening on port ' + app.get('port'));
    }

})

