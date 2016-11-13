'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Datagoogle = new Module('datagoogle');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Datagoogle.register(function(app, auth, database, circles) {

  //We enable routing. By default the Package Object is passed to the routes
  Datagoogle.routes(app, auth, database, circles);

  //We are adding a link to the main menu for all authenticated users
  Datagoogle.menus.add({
    title: 'Google Search',
    link: 'datagoogle index',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Datagoogle.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Datagoogle.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Datagoogle.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Datagoogle;
});
