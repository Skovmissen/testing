import * as express from 'express';
import { greeting } from './greeting';
let app = express();
app.set('port', (process.env.PORT || 5000));
app.get("/", function (req, res) {
    console.log("Request!");
    res.send(greeting(new Date()));
});
app.listen(app.get('port'), function () {
    console.log('Node app is running on port', app.get('port'));
});