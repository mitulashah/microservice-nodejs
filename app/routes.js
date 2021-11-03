module.exports = function routes(app, express) {

    // set up modules
    var bodyParser = require('body-parser');
    var helmet = require('helmet');
    var compression = require('compression');

    var port = process.env.PORT || 8080;

    // register middlewares
    app.use(helmet());
    app.use(compression());
    app.use(bodyParser.urlencoded({ extended: true }));

    console.log('Routes configured...')

    // base route
    app.get('/', function (req, res) { res.status(200).send('API Server Running...') });
    app.get('/emoji', function (req, res) { res.status(200).send('Emojis Response Goes Here...') });

    // error handler
	app.use(function (err, req, res, next) {
		console.error(err);
		res.status(500).send(err.message);
	});

    // listener
    app.listen(port);
};
