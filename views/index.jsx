const React = require('react')
const seedData = require('../models/seedData')
const Layout = require('./Layout')

class Index extends React.Component {
    render() {
        const {request, index} = this.props
        return (
            <Layout>
                <h2 class="d-flex justify-content-center">Approved Requests</h2>
                <div class="d-flex flex-row">
                {request.map((request, index) => {
                    let isPending = request.pending
                    if (isPending === false) {
                        return (
                            <div class="card w-50" id="index">
                                <div class="card-body">
                                    <ul key={index} >
                                    <h5 class="card-title">{request.name}</h5>
                                        <li class="card-text">Date: {request.date}</li>
                                        <li class="card-text">Bucket #{request.bucket}</li>
                                        <li class="card-text">Note: {request.note}</li>
                                    </ul>
                                </div>
                            </div> 
                        )
                    }
                })}
                </div> 
            </Layout>
        )
    }
}

module.exports = Index;