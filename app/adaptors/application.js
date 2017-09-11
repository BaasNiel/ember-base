import ENV from 'dota-picky/config/environment';
import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: ENV.apiHost
});
