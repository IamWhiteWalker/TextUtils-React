import React from "react";

const Alert = (props) => {

    const capitalizeFirstWord = (word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    if (props.alert !== null) {
        return (
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalizeFirstWord(props.alert.type)}</strong>: {props.alert.msg}
            </div>
        )
    }
    else return null
}

export default Alert