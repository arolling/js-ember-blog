import Ember from 'ember';

export default Ember.Component.extend({
  sortedPosts: Ember.computed.sort('post', 'sortDefinition'),
  sortDefinition: ['datePosted:desc']
});
