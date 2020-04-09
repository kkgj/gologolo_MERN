import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import gql from "graphql-tag";
import { Query, Mutation } from "react-apollo";
import TextEditWorkspace from './TextEditWorkspace.js'

const GET_LOGO = gql`
    query logo($logoId: String) {
        logo(id: $logoId) {
            _id
            text
            color
            fontSize
            backgroundColor
            borderColor
            borderRadius
            borderWidth
            padding
            margin
        }
    }
`;

const UPDATE_LOGO = gql`
    mutation updateLogo(
        $id: String!,
        $text: String!,
        $color: String!,
        $fontSize: Int!,
        $backgroundColor: String!,
        $borderColor: String!,
        $borderRadius: Int!,
        $borderWidth: Int!,
        $padding: Int!,
        $margin: Int!) {
            updateLogo(
                id: $id,
                text: $text,
                color: $color,
                fontSize: $fontSize,
                backgroundColor: $backgroundColor,
                borderColor: $borderColor,
                borderRadius: $borderRadius,
                borderWidth: $borderWidth,
                padding: $padding,
                margin: $margin) {
                    lastUpdate
                }
        }
`;

class EditLogoScreen extends Component {
  
    state = {
        text: "",
        color: "",
        fontSize: "",
        backgroundColor: "",
        borderRadius: "",
        borderColor: "",
        borderWidth: "",
        padding: "",
        margin: "",
        flag: true,
        buttonDisabled: false,
        errorMessage: "",
        fontSizeMessage: "",
        borderRadiusMessage: "",
        borderWidthMessage: "",
        paddingMessage: "",
        marginMessage: ""
    }
    handleInit = (data) => {
        this.setState( {text: data.logo.text, color: data.logo.color, fontSize: data.logo.fontSize, flag: false, 
        backgroundColor: data.logo.backgroundColor, borderRadius: data.logo.borderRadius, borderColor: data.logo.borderColor,
        borderWidth: data.logo.borderWidth, padding: data.logo.padding, margin: data.logo.margin} );
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
            this.setState({ buttonDisabled: true, borderRadiusMessage: "Font Size cannot be empty" });
        } else {
            this.setState({buttonDisabled: false, borderRadiusMessage: ""});
        }
        this.setState({ borderRadius: event.target.value });
    }

    handleBorderWidth = (event) => {
        if (event.target.value.trim().length < 1) {
            this.setState({ buttonDisabled: true, borderWidthMessage: "Font Size cannot be empty" });
        } else {
            this.setState({buttonDisabled: false, borderWidthMessage: ""});
        }
        this.setState({ borderWidth: event.target.value });
    }

    handlePadding = (event) => {
        if (event.target.value.trim().length < 1) {
            this.setState({ buttonDisabled: true, paddingMessage: "Font Size cannot be empty" });
        } else {
            this.setState({buttonDisabled: false, paddingMessage: ""});
        }
        this.setState({ padding: event.target.value });
    }

    handleMargin = (event) => {
        if (event.target.value.trim().length < 1) {
            this.setState({ buttonDisabled: true, marginMessage: "Font Size cannot be empty" });
        } else {
            this.setState({buttonDisabled: false, marginMessage: ""});
        }
        this.setState({ margin: event.target.value });
    }
    
    render() {
        return (
            <Query query={GET_LOGO} variables={{ logoId: this.props.match.params.id }}>
                {({ loading, error, data }) => {
                    if (loading) return 'Loading...';
                    if (error) return `Error! ${error.message}`;
                    if (this.state.flag){
                        this.handleInit(data);
                    }
                    return (
                        <Mutation mutation={UPDATE_LOGO} key={data.logo._id} onCompleted={() => this.props.history.push(`/`)}>
                            {(updateLogo, { loading, error }) => (
                                <div className="container">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4><Link to="/">Home</Link></h4>
                                            <h3 className="panel-title">
                                                Edit Logo
                                        </h3>
                                        </div>
                                        <div className="row" style={{marginLeft: 0}}>                                            
                                            <form onSubmit={e => {
                                                e.preventDefault();
                                                updateLogo({ variables: { id: data.logo._id, text: this.state.text, color: this.state.color, fontSize: parseInt(this.state.fontSize),
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
                                                <div className="form-group">
                                                    <label htmlFor="text">Text:</label>
                                                    <input type="text" className="form-control" name="text" onChange={this.handleText} ref={node => {
                                                        //text = node;
                                                    }} placeholder="Text" defaultValue={data.logo.text} />
                                                    <p style={{ color: 'red' }}>
                                                        {this.state.errorMessage}
                                                    </p>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="color">Color:</label>
                                                    <input type="color" className="form-control" name="color" onChange={this.handleColor} ref={node => {
                                                        //color = node;
                                                    }} placeholder="Color" defaultValue={data.logo.color} />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="fontSize">Font Size:</label>
                                                    <input type="text" className="form-control" name="fontSize" onChange={this.handleFontSize} ref={node => {
                                                        //fontSize = node;
                                                    }} placeholder="Font Size" defaultValue={data.logo.fontSize} />
                                                    <p style={{ color: 'red' }}>
                                                        {this.state.fontSizeMessage}
                                                    </p>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="backgroundColor">Background Color:</label>
                                                    <input type="color" className="form-control" name="backgroundColor" onChange={this.handleBackground} ref={node => {
                                                        //backgroundColor = node;
                                                    }} placeholder="Background Color" defaultValue={data.logo.backgroundColor}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderColor">Border Color:</label>
                                                    <input type="color" className="form-control" name="borderColor" onChange={this.handleBorderColor} ref={node => {
                                                        //borderColor = node;
                                                    }} placeholder="Border Color" defaultValue={data.logo.borderColor}/>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderRadius">Border Radius:</label>
                                                    <input type="number" className="form-control" name="borderRadius" onChange={this.handleBorderRadius} ref={node => {
                                                        //borderRadius = node;
                                                    }} placeholder="Border Radius" defaultValue={data.logo.borderRadius}/>
                                                    <p style={{ color: 'red' }}>
                                                        {this.state.borderRadiusMessage}
                                                    </p>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="borderWidth">Border Width:</label>
                                                    <input type="number" className="form-control" name="borderWidth" onChange={this.handleBorderWidth} ref={node => {
                                                        //borderWidth = node;
                                                    }} placeholder="Border Width" defaultValue={data.logo.borderWidth}/>
                                                    <p style={{ color: 'red' }}>
                                                        {this.state.borderWidthMessage}
                                                    </p>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="padding">Padding:</label>
                                                    <input type="number" className="form-control" name="padding" onChange={this.handlePadding} ref={node => {
                                                        //padding = node;
                                                    }} placeholder="Padding" defaultValue={data.logo.padding}/>
                                                    <p style={{ color: 'red' }}>
                                                        {this.state.paddingMessage}
                                                    </p>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="margin">Margin:</label>
                                                    <input type="number" className="form-control" name="margin" onChange={this.handleMargin} ref={node => {
                                                        //margin = node;
                                                    }} placeholder="Margin" defaultValue={data.logo.margin}/>
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
                            )}
                        </Mutation>
                    );
                }}
            </Query>
        );
    }
}

export default EditLogoScreen;