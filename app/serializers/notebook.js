// import DS from 'ember-data';

// export default DS.RESTSerializer.extend({
// });


// Serializer just for our notebooks route


import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  //normalize gets the data from api and formats it for ember... EMBER GET THIS DATA
  normalize: function(typeClass, hash, prop) {
    hash.title = hash.Title;
    delete hash.Title;
    hash.user = hash.User;
    delete hash.User;
    return this._super(typeClass, hash, prop);      
  },
  //serialize gets the data ready for consumption... API COSUME THIS
  serialize: function(snapshot, options) {
    var json = {
      Title: snapshot.attr('title'),
      User: snapshot.belongsTo('user').id
    };  
    return json;
  },
}); 
