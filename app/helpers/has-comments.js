import Ember from 'ember';

export function hasComments(params) {
  var post = params[0];
  if(post.get('comments').get('length') > 0){
    return Ember.String.htmlSafe('<span class="badge">' + post.get('comments').get('length') + '</span>');
  }
}

export default Ember.Helper.helper(hasComments);
