import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('comment', params.comment_id);
  },
  actions: {
    updateComment(comment, params) {
      console.log(comment);
      Object.keys(params).forEach(function(key) {
        if(params[key] !==undefined && params[key] !== "") {
          comment.set(key, params[key]);
        }
      });
      comment.save();
      this.transitionTo('entry', comment.get('post'));
    },

    deleteComment(comment){
      var post = comment.get('post');
      comment.destroyRecord();
      this.transitionTo('entry', post);
    }
  }
});
