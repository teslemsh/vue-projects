import Vue from 'vue'
import Login from '../../views/Login'


describe('Login', () => {
  // Inspect the raw component options
  it('has a created hook', () => {
    expect(typeof Login.created).toBe('function')
  })
})