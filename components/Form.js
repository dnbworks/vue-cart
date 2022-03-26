app.component('login-form', {
    template:
    /*html*/
    `
    <form @submit.prevent="handleSubmit">
        <h1>{{ title }}</h1>
        <custom-input 
            v-for="(input, i) in inputs"
            :key="i"
            v-model="input.value" 
            v-bind:label="input.label"
            :type="input.type"/>
        <button>Log in</button>
    </form>
    `,
    components: ['custom-input'],
    data(){
        return {
            title: 'Login Form',
            inputs: [
                {
                    label: 'Email',
                    value: '',
                    type: 'email'
                },
                {
                    label: 'Enter Password',
                    value: '',
                    type: 'password'
                }
            ],
            email: '',
            password: '',
            emailLabel: 'Email',
            passwordLabel: 'Password'
        }
    },
    methods: {
        handleSubmit(){
            console.log(this.inputs[0].value, this.inputs[1].value);
        }
    }
})