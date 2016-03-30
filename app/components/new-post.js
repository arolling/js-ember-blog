import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    savePost(){
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
        datePosted: this.get('datePosted')
      };
      this.sendAction('addPost', params);
    }
  }
});
