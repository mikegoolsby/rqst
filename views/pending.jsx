const React = require('react');
const Layout = require('./Layout')

class Pending extends React.Component {
    render() {
        return (
            <Layout>
                <h1>pending requests here</h1>
            </Layout>
        )
    }
}

module.exports = Pending;