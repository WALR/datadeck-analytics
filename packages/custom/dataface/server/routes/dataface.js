(function() {
    'use strict';

    /* jshint -W098 */
    // The Package is past automatically as first parameter
    module.exports = function(Dataface, app, auth, database, circles) {

        var requiresAdmin = circles.controller.hasCircle('admin');
        var requiresLogin = circles.controller.hasCircle('authenticated');
        // var Page = require('./modelo/datapage');

        app.get('/api/dataface/example/anyone', function(req, res) {
            res.send('Anyone can access this');
        });

        // app.get('/api/page', Controller.getPage);


        app.get('/api/dataface/example/auth', requiresLogin, function(req, res) {
            res.send('Only authenticated users can access this');
        });

        app.get('/api/dataface/example/admin', requiresAdmin, function(req, res) {
            res.send('Only users with Admin role can access this');
        });

        app.get('/api/dataface/example/render', function(req, res) {
            Dataface.render('index', {
                package: 'dataface'
            }, function(err, html) {
                //Rendering a view from the Package server/views
                res.send(html);
            });
        });
    };
})();
