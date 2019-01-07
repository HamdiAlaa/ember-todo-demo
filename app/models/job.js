import DS from 'ember-data';

export default DS.Model.extend({
    jobname:DS.attr('string'),
    status:DS.attr('number')
    
});
