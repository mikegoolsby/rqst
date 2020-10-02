const React = require('react');
const { render } = require('react-dom');
const user = require('../models/user')
const Layout = require('./Layout')

class Login extends React.Component {
    render() {
        return (
            <Layout>
                <h2 class="d-flex justify-content-center">Log In to RQST</h2>
                <form action="/rqst-go/login" method="POST">
                    <div class="form-group">
                        <label for="username" class="col-sm-2">Username</label>
                        <input type="email" class="form-control col-sm-2" name="username" id="username" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text text-muted">Please enter your corporate login details.</small>
                    </div>
                    <div class="form-group">
                        <label for="password" class="col-sm-2">Password</label>
                        <input type="password" class="form-control col-sm-2" name="password" id="password" placeholder="Password"></input>
                    </div>
                    <div>
                        <input type="submit" class="btn btn-primary" value="Login"></input>
                        <a href="/rqst-go"><button type="button" class="btn btn-warning">Signup</button></a>
                    </div>
                </form>
            </Layout>
        )
    }
}

module.exports = Login;