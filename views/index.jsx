const React = require('react')
const seedData = require('../models/seedData')
const Request = require('../models/request')
const Layout = require('./Layout')

class Index extends React.Component {
    render() {
        const {request, index} = this.props
        return (
            <Layout>
                <h1 class="d-flex justify-content-center">RQST</h1>
                <div class="d-flex flex-row">
                {Request.map((request, index) => {
                    return (
                        <div class="row p-2" id="index">
                        <ul key={index} >
                        <h3>{request.name}</h3>
                            <li>Date: {request.date}</li>
                            <li>Bucket # {request.bucket}</li>
                            <li>Note: {request.note}</li>
                        </ul>
                        </div> 
                    )
                })}
                </div> 
            </Layout>
        )
    }
}

module.exports = Index;