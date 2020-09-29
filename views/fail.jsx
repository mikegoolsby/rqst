const React = require('react');
const { render } = require('react-dom');
const user = require('../models/user')
const Layout = require('./Layout')

class Fail extends React.Component {
    render() {
        return (
            <Layout title="Login to RQST">
                <form>
                    <div class="form-group">
                        <label for="username" class="col-sm-2">Username</label>
                        <input type="email" class="form-control col-sm-2" id="username" aria-describedby="emailHelp" placeholder="Enter email"></input>
                        <small id="emailHelp" class="form-text text-muted">Please enter your corporate login details.</small>
                    </div>
                    <div class="form-group">
                        <label for="password" class="col-sm-2">Password</label>
                        <input type="password" class="form-control col-sm-2" id="password" placeholder="Password"></input>
                        <p id="failed">Login failed. Please ensure you are using the correct username and password.</p>
                    </div>
                </form>
                    <div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
            </Layout>
        )
    }
}

module.exports = Fail;