
app.component('custom-input', {
            // props: {
            //     label: {
            //         type: String,
            //         required: true
            //     }
            // },
            template:
            /*html*/ 
            `
            <label>
                {{ label }}
                <input :type="type" v-model="inputValue"/>
            </label>
            `,
            props: ['label', 'type', 'modelValue'],
            computed: {
                inputValue: {
                    get(){
                        return this.modelValue;
                    },
                    set(value){
                        this.$emit('update:modelValue', value)
                    }
                }
            }
        //     data(){
        //         return {
        //             inputValue: ''
        //         }
        //     }
})