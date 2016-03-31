import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  content: DS.attr(),
  title: DS.attr(),
  datePosted: DS.attr('date'),
  comments: DS.hasMany('comment', {async: true}),

});
