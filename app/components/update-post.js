import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(post) {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        datePosted: this.get('datePosted')
      };
      this.sendAction('updatePost', post, params);
    },

    deletePost(post){
      if(confirm('Do you want to delete this post forever?')){
        this.sendAction('destroyEntry', post);
      }
    }
  }

});
