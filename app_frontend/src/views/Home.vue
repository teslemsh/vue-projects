<template>
    <v-app id="inspire">
        <v-navigation-drawer v-model="drawer" app right>
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-contact-mail</v-icon>
                    </v-list-item-action>

                    <v-list-item-content>
                        <v-list-item-title>Contact</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar app color="cyan" dark>
            <v-spacer/>
            <v-toolbar-title>Application</v-toolbar-title>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
        </v-app-bar>
        <v-content>
            <v-container class="fill-height" fluid>
                <v-row align="center" justify="center">
                    <v-col class="text-center">
                        <ProductList/>
                        <ShoppingCart/>
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
        <v-footer color="cyan" app>
            <v-spacer/>
            <span class="white--text">&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
	import TplHeader from "../components/Header.vue";
	import ProductList from '../components/ProductList'
	import ShoppingCart from '../components/ShoppingCart'

	export default {
		name: "Secure",
		props : {
			source : String ,
		} ,
        components: {
            "tpl-header": TplHeader,
            ProductList,
            ShoppingCart
        },
		data : () => ({
			drawer : null ,
		})
	}
</script>