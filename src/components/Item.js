import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {updateSelection} from "../actions/updateSelection"

function Item(props) {
  console.log("Item")
  console.log(props)
  var {item} = props;

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.price}</td>
      <td>{item.unit}</td>
      <td>
        <input
          type="text"
          name="weight"
          placeholder="purchase weight"
          value={props.selections
            .filter((select) => select.id === item.id)
            .map((select) => select.weight)}
          onChange={(e) => props.updateSelection(item.id, e.target.value)}
        />
      </td>
    </tr>
  );
}

Item.propTypes = {
    item: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  ...state
})

// updateSelection is an action creator, it will passed to the component's props.
// mapStateToProps maps the updated states to props, so that component can access it.
export default connect(mapStateToProps, {updateSelection})(Item);