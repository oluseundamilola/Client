import React from "react";
import { connect } from "react-redux";
import { fetchSteam } from "../../actions";

class StreamShow extends React.Component{
    componentDidMount(){
        this.props.fetchSteam(this.props.match.params.id);
    };
    render(){
        if(!this.props.stream){
            return <div>LOading...</div>
        }

            const {title, description} = this.props.stream;
            return (
                <div>
                    <h1>{title}</h1>
                    <h5> {description} </h5>
                </div>
            );
    }
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, {fetchSteam}) (StreamShow);