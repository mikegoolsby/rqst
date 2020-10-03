const React = require('react');

class Layout extends React.Component {
    render() {
        return(
        <html>
            <head>
                <title>{this.props.title}</title>
                <script
                src="https://code.jquery.com/jquery-3.5.1.min.js"
                integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
                crossorigin="anonymous" defer></script>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=Abel&family=Alef&display=swap" rel="stylesheet"></link>
                <link rel="stylesheet" href="/path/to/theme.default.css"></link>

                <script type="text/javascript" src="/path/to/jquery-latest.js"></script>
                <script type="text/javascript" src="/path/to/jquery.tablesorter.js"></script>
                <link rel="stylesheet" href="/style.css"></link>
                <script src="jquery.bootgrid.js"></script>
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
                        <a class="nav-link text-info" href="/rqst-go/pending">Pending Requests</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-danger" href="/rqst-go/logout">Log Out</a>
                    </li>
                </ul>
                </div>
                <h1 class="d-flex justify-content-center">RQST &lt;GO&gt;</h1>
                <hr style={{width:'50%'}}></hr>
                <main>{this.props.children}</main>
                <br></br>
                <div class="d-flex justify-content-center">
                    <footer>&copy;Created by M. Goolsby, 2020</footer>
                </div>
            </body>
        </html>
        )
    }
}

module.exports = Layout;