#FB post monitor

###Introduction
Contrived app that allows you to view and delete comments that have been made upon your Facebook wall posts.

###Scope
It touches upon the following key topics and frameworks:

* Javascript SPA development  
  * Ember.js
* 3rd party API integration
  * Facebook javascript SDK
  * breeze.js (client-side data management)
* AMD
  * require.js

###Setup
The following setup is included:

  * configuring the require.js environment
  * instantiating the Ember application
  * defining the app's routes
  * integrating the Facebook javascript SDK
  * creating the breeze.js data context
  * creating the post browser UI

To get things set up:

* install [node.js](http://nodejs.org)
* alias the test.local domain to localhost, so that your browser resolves test.local to localhost.
* run the following commands in the project's directory:  
`npm install`  
`node server.js`
* point your browser to [http://test.local:3000](http://test.local:3000)

You should be able to click the Facebook login button at the top right of the screen, authorize the app to read and publish your stream, and see a list of your recent Facebook posts.

###Goal

What's left to do is to flesh out the post comments route. When you click on a particular post, you should be shown a list of recent comments for that post, and have the option to delete a comment with the click of a button.


###Changes made by Juan:
- challenge-master/view/rootLoginView.js
    - changed scopes from "read_stream,publish_stream" to "user_posts,publish_actions,publish_pages,manage_pages"
- challenge-master/index.html
    - changed appId from 175885359193859 to 1889417737977416 since the given appId was missing the "test.local" app domain in the configuration

###Test/Debug code:
manager.dataService.adapterInstance.saveChanges()
Tar command used: tar -cvzf voxsup_starter.tgz --exclude node_modules ./challenge-master/
