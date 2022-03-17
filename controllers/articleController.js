const {Article} = require('../models');

module.exports.renderAddForm = function(req, res) {
    const article ={
        title: '',
        intro: '',
        image_url: '',
        body: '',
    };
    res.render('articles/add', {article});
};

module.exports.addArticle = async function (req, res) {
    const article = await Article.create({
        title: req.body.title,
        intro: req.body.intro,
        image_url.req.body.image_url,
        body
    });
    res.redirect('/') //todo change the redirect to view all once made
}