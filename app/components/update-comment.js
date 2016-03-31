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
    },
    disemvowel(comment){
      var moderated = comment.get("words").replace(/[aeiou]/gi, '');
      comment.set("words", moderated);
      var params = {
        words: moderated
      };
      this.sendAction('updateComment', comment, params);
    }
  }
});
