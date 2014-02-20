
/**
 * Module dependencies.
 */

var express				= require('express');
var http				= require('http');
var path				= require('path');
var MySQLSessionStore	= require('connect-mysql-session')(express);
var config				= require('./config');
var routes				= require('./routes');
var user				= require('./routes/user');
var db					= require('./models');

var app 				= express();

VIEW_ENGINE				= config.app_view_engine;
SESSION_STORE			= config.mysql_session_store;
SESSION_KEY				= config.session_key;
USERNAME				= config.mysql_user;
PASSWORD				= config.mysql_password;

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', VIEW_ENGINE);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());

// add session support
app.use(express.session({
	store	: new MySQLSessionStore(SESSION_STORE, USERNAME, PASSWORD),
	secret	: SESSION_KEY
}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// error handling middleware
app.use(function (error, req, res, next) {
	if (error instanceof NotFound) {
		res.render('app/404', {
			locals: {
				title			: '404',
				description		: '',
				author			: '',
				analyticssiteid	: 'XXXXXXX',
				status			: 404
			}
		});
	} else {
		res.render('app/500', {
			locals: {
				title			: '500',
				description		: '',
				author			: '',
				analyticssiteid	: 'XXXXXXX',
				error			: error,
				status			: 500
			}
		});
	}
});

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

/**
 * Routes
 */

app.get('/', routes.index);
app.get('/users', user.list);

// A route for creating a 500 error
app.get('/500', function (req, res) {
	throw new Error('The server encountered an error.');
});

// The 404 Route (ALWAYS keep this as the last route)
app.get('/*', function (req, res) {
	throw new NotFound;
});

function NotFound (msg) {
	this.name = 'NotFound';
	Error.call(this, msg);
	Error.captureStackTrace(this, arguments.callee);
}

db.sequelize.sync()
.complete(function () {
	http.createServer(app).listen(app.get('port'), function(){
		console.log('Express server listening on port ' + app.get('port'));
	});
});
