// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
import cart from './CartComponent'
import products from './ProductComponent'
import filterEl from './FilterComp'
import error from './ErrorComp'

const app = new Vue({
    el: '#app',
    data: {
        userSearch: '',
    },
    components: {
        cart,
        products,
        error,
        'filter-el': filterEl
    },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
        postJson(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
        putJson(url, data){
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },
        deleteJson(url) {
            return fetch(url, {
                method: 'DELETE',
            })
                .then(result => result.json())
                .catch(error => {
                    this.$refs.error.text = error;
                })
        },


    },
});
export default app;
