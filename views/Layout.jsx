const React = require('react');

class Layout extends React.Component {
    render() {
        return(
        <html>
            <head>
                <title>{this.props.title}</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="/style.css"></link>
            </head>
            <body>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                <div>
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active text-info" href="/rqst-go/main">Existing Time Off Days</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-info" href="/rqst-go/new">Add New Request</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-info" href="#">Pending Requests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-danger" href="/logout">Log Out</a>
                    </li>
                </ul>
                </div>
                <main>{this.props.children}</main>
            </body>
        </html>
        )
    }
}

module.exports = Layout;