import React from "react";
import Button from "calcite-react/Button";
import Panel, {
  PanelTitle,
  PanelText
} from 'calcite-react/Panel'

class ShoppingListNew extends React.Component {
  render() {
    return (
      <div className="shopping-list">
      <Button green>I am Naveen and I'm here'</Button>
        <Panel blue>
          <PanelTitle>This is a panel.</PanelTitle>
          <PanelText>
            I am going to write content to the panel
          </PanelText>
        </Panel>
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingListNew;