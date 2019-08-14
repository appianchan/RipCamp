import { connect } from "react-redux";
import SurfSpotsIndex from "./surf_spots_index";
import {getSurfSpots} from "../../actions/surf_spot_actions"

const mapStateToProps = state => {
  return {
    spots: state.entities.surfSpots,
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => ({
  getSurfSpots: (city) => dispatch(getSurfSpots(city))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SurfSpotsIndex);