const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());//sab json format mai transfer hoga isileye we are enabling json
app.use(bodyParser.urlencoded({//urlencoded likha hai so that jo bhi hum query string pass kare vo use padh sakhe
    extends: true,
}
));

app.set('port',5000);
app.listen(app.get('port'),function(){
    console.log('the server is working');
});