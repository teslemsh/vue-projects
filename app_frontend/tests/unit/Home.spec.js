import {shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import vuetify from "vuetify"
import vue from "vue"

describe('Home.vue', () => {
  let wrapper;
  beforeEach(()=>{
    vue.use(vuetify)
    wrapper = shallowMount(Home);
  })
  it('renders a vue instance', () => {
     expect(wrapper.isVueInstance()).toBe(true);
   });

})
