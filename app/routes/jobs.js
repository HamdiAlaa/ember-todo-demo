import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.findAll('job');
    },
    actions: {
        //Ajouter une nouvelle tache
        createNewTask: function () {
            let newTask = this.get('controller').get('newTask');
            let task = this.store.createRecord('job', {
                jobname: newTask,
                status: 1
            });
            task.save();
            window.location.href = '/jobs';
        },
        // supprimer une tache
        destroyJob(id) {
            this.store.findRecord('job', id, { backgroundReload: false }).then(function (post) {
                post.deleteRecord();
                post.get('isDeleted');
                post.save();
            });
        },
        //Dire qu'une tache est achevée
        updateJob(id) {
            this.store.findRecord('job', id).then(function (tyrion) {
                tyrion.set('status', 0);
                tyrion.save();
            });
        },

    }



});

