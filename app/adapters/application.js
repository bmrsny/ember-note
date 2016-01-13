import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  namespace: 'api',
  // hostname: 'https://embernote.example.com' // maybe you have a dif subdomain used for api call
  // namespace: 'api/alt',

  headers: function() {
    if(this.get('session.user')) {
      return {
        'username' : this.get('session.user').get('name')     
      };
    }
  }.property('session.user')

});
