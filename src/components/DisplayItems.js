import React from "react";
import {connect} from "react-redux";
import Item from "./Item";

function DisplayItems(props) {

    // Cannot have if-else in JSX
    if (!props.items) {
        return (
        <div>
        <p>No Items to display</p>
        </div>
        )
    } else {
        return (
        <div>
            <p>Display items</p>
            <table>
            <thead>
                <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Unit</th>
                <th>Weight (kg)</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map((item) => (
                    <Item
                    key={item.id}
                    item={item}
                    selections={props.selections}
                    updateSelections={props.updateSelections}
                    />
                ))}
            </tbody>
            </table>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state        // These are the properties that will be put into props of this component
})

export default connect(mapStateToProps, {})(DisplayItems);