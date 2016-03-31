import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  words: DS.attr(),
  createdAt: DS.attr('date', {
    defaultValue() { return new Date();}
  }),
  post: DS.belongsTo('post', {async: true})

});
