const { createApp } = Vue


const app = createApp({

    data() {
        return {
            message: `Hello World`
        }
    }

}).mount('#app');


const ejemplo1 = createApp({
    data() {
        return {
            valorBind: `Hola vue`,
            valorModel: `Hola vue`
        }

    }
}).mount('#ejemplo1');


const ejemplo2 = createApp({
    data() {
        return {
            nombre: 'German',
            apellido: 'Gonzalez',
            edad: 30,
        }
    },
    methods: {
        nombreCompleto() {
            return `${this.nombre} ${this.apellido} y su edad es ${this.edad}`
        }
    }
}).mount('#ejemplo2');


const ejemplo3 = createApp({ //Instancia de Vue
    data() { //Datos
        return {
            nombre: 'Pirulo', //Propiedades
            apellido: 'Perez',
            edad: 25,
            contenidoHtml: `<h1>Hola mundo</h1><p>Este es un parrafo</p><a href="https://www.google.com">Ir a google</a>`,
            imagenSrc: 'https://picsum.photos/200/300',
            imagenAlt: 'Imagen de prueba',
        }
    }
}).mount('#ejemplo3');//Montar la instancia en el elemento con id ejemplo3

const CustomComponent1 = {
    template: '<h1>Este es un componente personalizado {{ textAuxiliarDelComponente }}</h1>',

    data() {
        return { textAuxiliarDelComponente: 'Hola mundo' }
    }
}

const ejemplo4 = createApp({
    components: {
        'custom-component': CustomComponent1
    }
}).mount('#ejemplo4');


const CustomComponent2 = {
    template: `<div v-on:mouseover="cambiarTexto();" v-on:mouseout="resetTexto();">
                <h1>Componente 2 personalizado {{ textAuxiliarDelComponente }}</h1>
               </div>`,
    data() {
        return {
            textAuxiliarDelComponente: 'del ejemplo 5'
        }
    },

    methods: {
        cambiarTexto() {
            this.textAuxiliarDelComponente = 'del ejemplo 5 con mouse over';
        }
        ,
        resetTexto() {
            this.textAuxiliarDelComponente = 'del ejemplo 5 con mouse out';
        },

    }
}


const ejemplo5 = createApp({
    components: {
        'custom-component-two': CustomComponent2
    },

}).mount('#ejemplo5');



const ejemplo6 = createApp({ //Instancia de Vue
    methods: {
        addItem() { //FUncion para agregar un item a la lista

            const carrito = this.$refs.carrito.value; //Obtener el valor del input
            const item = this.$refs.item; //Obtener el elemento del DOM

            item.innerHTML += `<li>${carrito}</li>`;            

        },
        removeItem() { //Funcion para remover un item de la lista

           const item = this.$refs.item; //Obtener el elemento del DOM

           item.innerHTML = ''; //Remover el contenido del elemento 

        }
    }

}).mount('#ejemplo6');




