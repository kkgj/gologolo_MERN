import React, { Component } from 'react'

// THIS IS HOW WE DISPLAY THE LOGO, IN THIS COMPONENT
class TextEditWorkspace extends Component {
    render() {
        const styles = {
            container: {
                color: this.props.color,
                fontSize: this.props.fontSize + "pt",
                backgroundColor : this.props.backgroundColor,
                borderColor : this.props.borderColor,
                borderRadius : this.props.borderRadius + "px",
                borderWidth : this.props.borderWidth + "px",
                borderStyle : "solid",
                padding : this.props.padding + "px",
                margin : this.props.margin + "px",
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