Vue.component('message', {
    props: ['title','body'],

    data() {
        return {
            isVisible: true
        };
    },

    template: `
        <article class="message" v-show="isVisible">
            <div class="message-header" style="background: indianred;">
                {{ title }}
                <button type="button" v-bind:class="{'messageCloser': true}" @click="hideModal">X</button>
            </div>
            <div class="message-body">
                {{ body }}
            </div>
        </article>`,

    methods: {
        hideModal() {
            this.isVisible = false;
        }
    }
});

new Vue({
    el: '#root'
});