import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('post', params.post_id);
  },

  actions: {
    update(post, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined && params[key] !== ""){
          post.set(key,params[key]);
        }
      });
      post.save();
      this.transitionTo('index');
    },
    destroyPost(post) {
      post.destroyRecord();
      this.transitionTo('index');
    },
    newComment(params) {
      var comment = this.store.createRecord('comment', params);
      var entry = params.post;
      entry.get('comments').addObject(comment);
      comment.save().then(function(){
        return entry.save();
      });
      this.transitionTo('entry', params.post);
    }
  }
});
