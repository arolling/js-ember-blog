import Ember from 'ember';

export default Ember.Component.extend({
  sortedComments: Ember.computed.sort('post.comments', 'sortDefinition'),
  sortDefinition: ['createdAt']
});
