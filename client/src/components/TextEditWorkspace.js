import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                text: this.props.logo.text,
                color: this.props.logo.color,
                fontSize: this.props.logo.fontSize + "pt",
                backgroundColor : this.props.logo.backgroundColor,
                borderColor : this.props.logo.borderColor,
                borderRadius : this.props.logo.borderRadius + "px",
                borderWidth : this.props.logo.borderWidth + "px",
                borderStyle : "solid",
                padding : this.props.logo.padding + "px",
                margin : this.props.logo.margin + "px",
                left : "38.4%",
                right : "auto",
                position : "absolute",
                width : "auto",
                whiteSpace: "pre"
                // overflow : "scroll"
            }
        }
        return (
            <div className="col s8" 
                style={ styles.container }>
                {this.props.text}
            </div>
        )
    }
}

export default TextEditWorkspace