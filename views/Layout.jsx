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
                <main>{this.props.children}</main>
            </body>
        </html>
        )
    }
}

module.exports = Layout;