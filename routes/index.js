/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('login', { title: 'GuS' });
	//res.send('hello world')
};