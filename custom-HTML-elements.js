Vue.component('task-list', {
    template: '<div><ul><task v-for="task in tasks">{{ task.description }}</task></ul></div>',
    //Wrap multiple components in a div

    data() {
        return {
            tasks: [
                {description: "Go to the store", complete: false},
                {description: "Check your inbox", complete: true},
                {description: "Go to the dentist", complete: false},
                {description: "Finish work", complete: false}
            ]
        }
    }
})


Vue.component('task', {
    template: '<li><slot></slot></li>'
});

new Vue ({
    el: '#root'
});