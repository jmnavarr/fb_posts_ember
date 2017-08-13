define(function(require) {
  var breeze = require('breeze');
  var breeze_client = require('breeze.ajaxpost');
  var Q = require('Q');
  var DT = breeze.DataType;

  var initialize = function(metadataStore) {
    metadataStore.addEntityType({
      shortName: 'Comment',
      dataProperties: {
        id: {
          dataType: DT.String,
          isPartOfKey: true
        },
        message: {
          dataType: DT.String
        },
        created_time: {
          dataType: DT.Date
        }
      }
    });
  };

  var downloadComments = function(manager, post_id) {
    var p = {
      _VOXSUPMETHOD_: 'EDGE'
    };

    q = breeze.EntityQuery.from(post_id + '/comments').withParameters(p).toType('Comment');
    return manager.executeQuery(q);
  };

  var deleteComment = function(manager, comment_id) {
    var ajaxAdapter = breeze.config.getAdapterInstance("ajax", 'facebook');
        
    return ajaxAdapter.ajax({path: comment_id}, 'DELETE').then(function(resp) {
        return Q.resolve({entities: [entity], keyMappings: []});
    });
  };

  return {
    initialize: initialize,
    downloadComments: downloadComments,
    deleteComment: deleteComment
  };
});
