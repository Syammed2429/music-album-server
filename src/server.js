const { app, port } = require('./index');

app.listen(port, () => {
    console.log('port:', port)

})