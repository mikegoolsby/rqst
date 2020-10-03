const React = require('react')
const seedData = require('../models/seedData')
const Layout = require('./Layout')

class Index extends React.Component {
    render() {
        const {request, index} = this.props
        return (
            <Layout>
                <h2 class="d-flex justify-content-center">Approved Requests</h2>
                {request.map((request, index) => {
                let isPending = request.pending
                if (isPending === false) {
                    return (
                <div class="d-flex align-items-center">
                <table class="table table-striped table-hover table-sm align-items-center">
                    <thead class="thead-dark">
                        <tr>
                        <th scope="col">Date</th>
                        <th scope="col">Name</th>
                        <th scope="col">Bucket</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row" class="table-active">{request.date}</th>
                        <td>{request.name}</td>
                        <td>{request.bucket}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                    )
                }
                })}
            </Layout>
        )
    }
}

module.exports = Index;