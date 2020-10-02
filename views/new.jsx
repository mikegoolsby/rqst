const React = require('react');
const Layout = require('./Layout')

class New extends React.Component {
    render() {
        return (
            <Layout>
                <div class="justify-content-center">
                    <h1>Enter a new time-off request:</h1>
                    <form action="/rqst-go/main" method="POST">
                        <div class="form-group d-flex flex-column">
                            Name: <input type="text" class="col-md-6 form-control" name="name"/>
                            Date: <input type="date" class="col-md-6 form-control" name="date"/>
                            Bucket: <input type="text" class="col-md-6 form-control" name="bucket"/>
                            Note: <input type="text" class="col-md-6 form-control" name="note"/>
                            <input class="btn btn-primary col-md-2" type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New;