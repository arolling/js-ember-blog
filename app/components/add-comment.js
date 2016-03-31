import Ember from 'ember';

export default Ember.Component.extend({
  clickAddComment: false,
  actions: {
    clickAddComment(){
      this.set('clickAddComment', true);
    },
    submitComment(){
      var params = {
        user: this.get('user'),
        words: this.get('words'),
        post: this.get('post')
      };

      this.set('clickAddComment', false);
      this.sendAction('addComment', params);
    }
  }
});
