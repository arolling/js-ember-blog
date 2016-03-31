import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    updateComment(comment) {
      var params = {
        words: this.get('words')
      };
      this.sendAction('updateComment', comment, params);
    },
    deleteComment(comment){
      if(confirm('Do you want to delete this comment forever?')){
        this.sendAction('destroyComment', comment);
      }
    }
  }
});
