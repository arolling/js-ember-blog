import Ember from 'ember';

export default Ember.Component.extend({
  clickAddComment: false,
  actions: {
    clickAddComment(){
      this.set('clickAddComment', true);
    }

  }
});
