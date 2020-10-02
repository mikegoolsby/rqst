const React = require('react');
const Layout = require('./Layout')
const Request = require('../models/request')

class Edit extends React.Component {
    render() {
        const {request, index} = this.props
        return (
            <Layout>
                <div class="justify-content-center">
                    <h1>Edit your date:</h1>
                    <form action={`/rqst-go/${index}/?_method=PUT`} method="POST">
                        <div class="form-group d-flex flex-column">
                            Name: <input type="text" class="col-md-6 form-control" name="name" defaultValue={request.name}/>
                            Date: <input type="date" class="col-md-6 form-control" name="date" value={request.date}/>
                            Bucket: <input type="text" class="col-md-6 form-control" name="bucket" defaultValue={request.bucket}/>
                            Note: <input type="text" class="col-md-6 form-control" name="note" value={request.note}/>
                            <input class="btn btn-primary col-md-2" type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit;