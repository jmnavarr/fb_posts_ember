define(function(require) {
  var Ember = require('ember');
  require('./dateHelper');
    
  // This section should display a list of recent comments for the active post, and allow the user to delete a comment with the click of a button.
    var T = Ember.Handlebars.compile('\
        <div class="well"> \
        <h4>Comments</h4> \
        <table class="table table-striped table-hover"> \
          <thead><tr><th>Date</th><th>Message</th><th>Delete</th></tr></thead> \
          <tbody> \
            {{#each comment in model}} \
              <tr> \
                <td>{{date comment.created_time}}</td> \
                <td>{{comment.message}}</td> \
                <td><a href="#" {{action delete_comment comment}} class="btn btn-default btn-xs">Delete</a></td> \
              </tr> \
            {{/each}} \
          </tbody> \
        </table> \
        </div> \
  ');

  return Ember.View.extend({
    template: T
  });
});