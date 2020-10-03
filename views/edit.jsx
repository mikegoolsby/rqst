const React = require('react');
const Layout = require('./Layout')
const Request = require('../models/request')

class Edit extends React.Component {
    render() {
        const {gettingRequest, index} = this.props
        return (
            <Layout>
                <div class="justify-content-center">
                    <h1>Edit your request</h1>
                    <form action={`/rqst-go/${gettingRequest._id}/edit/?_method=PUT`} method="POST">
                        <div class="form-group d-flex flex-column">
                            Name: <input type="text" class="col-md-6 form-control" name="name" defaultValue={gettingRequest.name} readOnly/>
                            Date: <input type="date" class="col-md-6 form-control" name="date" value={gettingRequest.date}/>
                            Bucket: <input type="text" class="col-md-6 form-control" name="bucket" defaultValue={gettingRequest.bucket}/>
                            Note: <input type="text" class="col-md-6 form-control" name="note" value={gettingRequest.note}/>
                            <input class="btn btn-primary col-md-2" type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit;