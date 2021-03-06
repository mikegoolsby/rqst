const React = require('react');
const { render } = require('react-dom');
const user = require('../models/user')
const Layout = require('./Layout')

class Signup extends React.Component {
    render() {
        return (
            <Layout>
                <h2 class="d-flex justify-content-center">Sign Up for RQST Access</h2>
                <div class="d-flex flex-column">
                <form class="p-2" action="/rqst-go" method="POST">
                    <div class="form-group">
                        <label for="username" class="col-sm-2">Username</label>
                        <input type="email" class="form-control col-sm-2" id="username" aria-describedby="emailHelp" placeholder="Enter email" name="username"></input>
                        <small id="emailHelp" class="form-text text-muted">Please enter your corporate login details.</small>
                    </div>
                    <div class="form-group">
                        <label for="password" class="col-sm-2">Password</label>
                        <input type="password" class="form-control col-sm-2" id="password" placeholder="Password" name="password"></input>
                    </div>
                    <fieldset class="form-group">
                        <div class="row">
                            <legend class="col-form-label col-sm-2 pt-0">Select your Role:</legend>
                            <div class="col-sm-10">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="employee-check" value="employee" checked></input>
                                    <label class="form-check-label" for="employee-check">Employee</label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="gridRadios" id="manager-check" value="manager"></input>
                                    <label class="form-check-label" for="manager-check">Manager</label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div>
                        <button type="submit" class="btn btn-primary">Sign Up</button>
                        <a href="/rqst-go/login"><button type="button" class="btn btn-warning">Login</button></a>
                    </div>
                </form>
                <div class="d-flex flex-column justify-content-center jumbotron p-2">
                        <h1 class="display-4">Hi, there. Welcome to RQST.</h1>
                        <p class="lead">This is a simple application that puts your time-off requests, approved days, and pending requests all in one place.</p>
                        <hr class="my-4"></hr>
                        <p class="lead"></p>
                </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Signup;