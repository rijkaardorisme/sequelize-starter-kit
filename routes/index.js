
/*
 * GET index
 */

exports.index = function (req, res) {
	res.render('app/index', {
		locals: {
			title: 'Express',
			description: '',
			author: '',
			analyticssiteid: 'XXXXXXX',
			status: 200
		}
	});
};