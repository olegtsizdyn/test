import React, { useEffect } from "react"
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'

const ProductDetails = ({ match, grocery }) => {

    useEffect(() => {
        console.log(grocery.grocery[match.params.id]);
    }, [])

    return (
        <>
            <p>Name: {grocery.grocery[match.params.id].grocery}</p>
            <p>Status: {`${grocery.grocery[match.params.id].status}`}</p>
            <p>Priority: {grocery.grocery[match.params.id].priority}</p>
        </>
    )
}

const mapStateToProps = ({ grocery }) => {
    return { grocery }
}

export default withRouter(connect(mapStateToProps)(ProductDetails));