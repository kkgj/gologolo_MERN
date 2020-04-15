import React, { Component } from 'react';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { Link } from 'react-router-dom';
import TextEditWorkspace from './TextEditWorkspace.js'

const ADD_LOGO = gql`
    mutation AddLogo(
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!) {
        addLogo(
            text: $text,
            color: $color,
            fontSize: $fontSize,
            backgroundColor: $backgroundColor,
            borderColor: $borderColor,
            borderRadius: $borderRadius,
            borderWidth: $borderWidth,
            padding: $padding,
            margin: $margin) {
            _id
            }
    }
`;

class CreateLogoScreen extends Component {
    state = {
        text: "Default Logo",
        color: "#1f3eff",
        fontSize: "50",
        backgroundColor: "#6BFF33",
        borderRadius: "10",
        borderColor: "#AB33FF",
        borderWidth: "20",
        padding: "20",
        margin: "20",
        buttonDisabled: false,
        errorMessage: "",
        fontSizeMessage: "",
        borderRadiusMessage: "",
        borderWidthMessage: "",
        paddingMessage: "",
        marginMessage: ""
    }

    handleText = (event) => {
        if (event.target.value.trim().length < 1) {
            this.setState({ buttonDisabled: true, errorMessage: "Text cannot be empty" });
        } else {
            this.setState({ buttonDisabled: false, errorMessage: "" });
        }
        this.setState({ text: event.target.value });
    }
    handleColor = (event) => {
        this.setState({ color: event.target.value });
    }
    handleFontSize = (event) => {
        if (event.target.value.trim().length < 1) {
            this.setState({ buttonDisabled: true, fontSizeMessage: "Font Size cannot be empty" });
        } else {
            this.setState({buttonDisabled: false, fontSizeMessage: ""});
        }
        this.setState({ fontSize: event.target.value });
    }
    handleBackground = (event) => {
        this.setState({ backgroundColor: event.target.value });
    }
    handleBorderColor = (event) => {
        this.setState({ borderColor: event.target.value });
    }

    handleBorderRadius = (event) => {
        if (event.target.value.trim().length < 1) {
            this.setState({ buttonDisabled: true, borderRadiusMessage: "Border Radius cannot be empty" });
        } else {
            this.setState({buttonDisabled: false, borderRadiusMessage: ""});
        }
        this.setState({ borderRadius: event.target.value });
    }

    handleBorderWidth = (event) => {
        if (event.target.value.trim().length < 1) {
            this.setState({ buttonDisabled: true, borderWidthMessage: "Border Width cannot be empty" });
        } else {
            this.setState({buttonDisabled: false, borderWidthMessage: ""});
        }
        this.setState({ borderWidth: event.target.value });
    }

    handlePadding = (event) => {
        if (event.target.value.trim().length < 1) {
            this.setState({ buttonDisabled: true, paddingMessage: "Padding cannot be empty" });
        } else {
            this.setState({buttonDisabled: false, paddingMessage: ""});
        }
        this.setState({ padding: event.target.value });
    }

    handleMargin = (event) => {
        if (event.target.value.trim().length < 1) {
            this.setState({ buttonDisabled: true, marginMessage: "Margin cannot be empty" });
        } else {
            this.setState({buttonDisabled: false, marginMessage: ""});
        }
        this.setState({ margin: event.target.value });
    }

    render() {
        return (
            <Mutation mutation={ADD_LOGO} onCompleted={() => this.props.history.push('/')}>
                {(addLogo, { loading, error }) => (
                    <div className="container">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                    <h4><Link to="/">Home</Link></h4>
                                </nav>
                            </div>
                            <div className="panel-body container pb-3 bg-dark text-white pt-2">
                                <div className="row" style={{marginLeft: 0}}>
                                    <form onSubmit={e => {
                                        e.preventDefault();
                                        addLogo({ variables: { text: this.state.text, color: this.state.color, fontSize: parseInt(this.state.fontSize),
                                            backgroundColor: this.state.backgroundColor, borderColor: this.state.borderColor, borderRadius: parseInt(this.state.borderRadius),
                                            borderWidth: parseInt(this.state.borderWidth), padding: parseInt(this.state.padding), margin: parseInt(this.state.margin) } });
                                        this.setState({text: ""});
                                        this.setState({color: ""});
                                        this.setState({fontSize: ""});
                                        this.setState({backgroundColor: ""});
                                        this.setState({borderColor: ""});
                                        this.setState({borderRadius: ""});
                                        this.setState({borderWidth: ""});
                                        this.setState({padding: ""});
                                        this.setState({margin: ""});
                                    }}>
                                        <h3 className="panel-title">
                                        Create Logo
                                        </h3>
                                        <div className="form-group">
                                            <label htmlFor="text">Text:</label>
                                            <input type="text" className="form-control" name="text" onChange={this.handleText} ref={node => {
                                                //text = node;
                                            }} placeholder="Text" defaultValue={this.state.text}/>
                                            <p style={{ color: 'red' }}>
                                                {this.state.errorMessage}
                                            </p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="color">Color:</label>
                                            <input type="color" className="form-control" name="color" onChange={this.handleColor} ref={node => {
                                                //color = node;
                                            }} placeholder="Color" defaultValue={"#1f3eff"}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="fontSize">Font Size:</label>
                                            <input type="number" className="form-control" name="fontSize" onChange={this.handleFontSize} ref={node => {
                                                //fontSize = node;
                                            }} placeholder="Font Size" defaultValue={this.state.fontSize}/>
                                            <p style={{ color: 'red' }}>
                                            {this.state.fontSizeMessage}
                                            </p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="backgroundColor">Background Color:</label>
                                            <input type="color" className="form-control" name="backgroundColor" onChange={this.handleBackground} ref={node => {
                                                //backgroundColor = node;
                                            }} placeholder="Background Color" defaultValue={"#6BFF33"}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="borderColor">Border Color:</label>
                                            <input type="color" className="form-control" name="borderColor" onChange={this.handleBorderColor} ref={node => {
                                                //borderColor = node;
                                            }} placeholder="Border Color" defaultValue={"#AB33FF"}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="borderRadius">Border Radius:</label>
                                            <input type="number" className="form-control" name="borderRadius" onChange={this.handleBorderRadius} ref={node => {
                                                //borderRadius = node;
                                            }} placeholder="Border Radius" defaultValue={this.state.borderRadius}/>
                                            <p style={{ color: 'red' }}>
                                            {this.state.borderRadiusMessage}
                                        </p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="borderWidth">Border Width:</label>
                                            <input type="number" className="form-control" name="borderWidth" onChange={this.handleBorderWidth} ref={node => {
                                                //borderWidth = node;
                                            }} placeholder="Border Width" defaultValue={this.state.borderWidth}/>
                                            <p style={{ color: 'red' }}>
                                            {this.state.borderWidthMessage}
                                        </p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="padding">Padding:</label>
                                            <input type="number" className="form-control" name="padding" onChange={this.handlePadding} ref={node => {
                                                //padding = node;
                                            }} placeholder="Padding" defaultValue={this.state.padding}/>
                                            <p style={{ color: 'red' }}>
                                            {this.state.paddingMessage}
                                        </p>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="margin">Margin:</label>
                                            <input type="number" className="form-control" name="margin" onChange={this.handleMargin} ref={node => {
                                                //margin = node;
                                            }} placeholder="Margin" defaultValue={this.state.margin}/>
                                            <p style={{ color: 'red' }}>
                                            {this.state.marginMessage}
                                        </p>
                                        </div>
                                        <button disabled={this.state.buttonDisabled} type="submit" className="btn btn-success">Submit</button>
                                        {loading && <p>Loading...</p>}
                                        {error && <p>Error :( Please try again</p>}
                                    </form>
                                    <TextEditWorkspace
                                        text={this.state.text} 
                                        color={this.state.color}
                                        fontSize={this.state.fontSize}
                                        backgroundColor={this.state.backgroundColor}
                                        borderColor={this.state.borderColor}
                                        borderRadius={this.state.borderRadius}                                        
                                        borderWidth={this.state.borderWidth}
                                        padding={this.state.padding}
                                        margin={this.state.margin}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Mutation>
        );
    }
}

export default CreateLogoScreen;