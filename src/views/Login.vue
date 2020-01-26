<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-4 col-sm-offset-4">
                <div class="text-center">
                    <img src="https://logos-blueland.s3-eu-west-1.amazonaws.com/blueland+logo.png" class="rounded" alt="...">
                </div>
                <div v-if="error" v-bind:class="{ error: error }">
                        Please enter a valid credentials
                </div>
                <div class="form-group">
                    <input
                            type="text"
                            class="form-control"
                            placeholder="Enter your username"
                            v-model="credentials.username"
                    >
                </div>
                <div class="form-group" v-bind:class="{form_error:error}">
                    <input
                            type="password"
                            class="form-control"
                            placeholder="Enter your password"
                            v-model="credentials.password"
                    >
                </div>
                <button class="btn btn-primary" @click="submit()" color>Access</button>
            </div>
        </div>
        
    </div>
</template>

<script>
    import auth from '../auth/index'

    export default {
        data() {
            return {
                mockCredentails: {
                    username: 'username',
                    password: 'password'
                },
                credentials: {
                    username: '',
                    password: ''
                },
                error: ''
            }
        },
        methods: {
            submit() {
                let credentials = {
                    user: this.credentials.username,
                    password: this.credentials.password
                };
                if(this.credentials.username == this.mockCredentails.username &&
                    this.credentials.password == this.mockCredentails.password) {
                    auth.login('secure', credentials)
                } else {
                    this.error = "Set a correct credentials"
                }
            }
        }

    }
</script>
<style scoped>
    .btn-primary {
        background-color: #B9B99F;
        border-color: #B9B99F;
    }
    .error {
        color: red;
        margin-bottom: 10pt;
    }
    .form-group:focus {
        border-color: #B9B99F;
    }
    /* resize images */
    .container img {
        width: 50%;
        height: auto;
    }
</style>