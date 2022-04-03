const product = {
    props: ['product', 'img'],
    template: `
            <div class="product-item">
           
                <img class="product-item__image" :src="'./images/' + product.image" alt="Some img">
                <div class="product-item__desc">
                    <h3>{{product.product_name}}</h3>
                    <p>{{product.price}} руб.</p>
                    <button class="buy-btn" @click="$emit('add-product', product)">Купить</button>
                </div>
            </div>
    `
};
// <%=require('../images/not-found_v1.svg').default%>
// :src="'images/' + product.image"
const products = {
   data(){
       return {
           catalogUrl: '/catalogData.json',
           filtered: [],
           products: [],
        }
    },
    components: {
        product
    },
    mounted(){
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data){
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch){
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
   template: `<div class="products section">
                <product v-for="item of filtered" 
                :key="item.id_product" 
                :product="item"
                @add-product="$parent.$refs.cart.addProduct"></product>
               </div>`
};


export default products;