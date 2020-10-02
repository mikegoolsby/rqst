const React = require('react');
const Layout = require('./Layout')
const Request = require('../models/request')
const methodOverride = require('method-override');

class Pending extends React.Component {
    render() {
        const {request, index} = this.props
        return (
            <Layout>
                <h2 class="d-flex justify-content-center">Pending Requests</h2>               
                {request.map((request, index) => {
                    let isPending = request.pending
                    if (isPending === true) {
                        return (
                            <div class="card w-50" id="index">
                                <div class="card-body">
                                    <ul key={index} >
                                    <h5 class="card-title">{request.name}</h5>
                                        <li class="card-text">Date: {request.date}</li>
                                        <li class="card-text">Bucket #{request.bucket}</li>
                                        <li class="card-text">Note: {request.note}</li>
                                        <br></br>
                                        <a href={`/rqst-go/${request._id}/edit`} class="btn btn-primary">Edit</a>
                                        <form action={`/rqst-go/${request._id}?_method=DELETE`} method="POST">
                                            <button type="submit" class="btn btn-danger" value="Delete">Delete</button>
                                        </form>
                                    </ul>
                                </div>
                            </div> 
                        )
                    }
                })}
            </Layout>
        )
    }
}

module.exports = Pending;