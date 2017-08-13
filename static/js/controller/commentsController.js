define(function(require) {
  var Ember = require('ember');
  var Q = require('Q');
  var dctx = require('../model/datacontext');

  return Ember.Controller.extend({
    findComments: function(post_id) {
      return dctx.downloadComments(post_id).then(function(r) {
        return Q.resolve(Ember.getWithDefault(r, 'results', []));
      });
    },
    deleteComment: function(comment_id) {
      return dctx.deleteComment(comment_id).then(function(r) {
        return Q.resolve(Ember.getWithDefault(r, 'results', []));
      });
    },
    actions: {
        delete_comment: function(comment) {
            alert("Comment with ID " + comment.id + " will be deleted.");
            dctx.deleteComment(comment.id);
        }
    }
  });
});
