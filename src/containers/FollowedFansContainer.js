import FollowedFans from "../components/FollowedFans";
import {connect} from "react-redux";
import * as actions from "../actions/fan";

const dispatchToPropsMapper = dispatch => ({
    fetchFollowedFans: () =>
        actions.fetchFollowed(dispatch),
    unfollowFan: (fan) =>
        actions.unfollowFan(dispatch, fan)
});
const stateToPropsMapper = state => ({
    followedFans: state.fanReducer.followedFans
});

const FollowedFansContainer = connect(stateToPropsMapper, dispatchToPropsMapper)(FollowedFans);
export default FollowedFansContainer;