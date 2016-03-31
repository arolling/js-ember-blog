import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('post');
  },

  actions: {
    save(params){
      if(params.datePosted === undefined){
        delete params.datePosted;
      }
      console.log(params);
      var newPost = this.store.createRecord('post', params);
      newPost.save();
      this.transitionTo('/');
    }
  }
});
