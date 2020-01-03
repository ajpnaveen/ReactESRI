import React from "react";
import TextField from 'calcite-react/TextField';
import Button from "calcite-react/Button";

class Comment extends React.Component {
  constructor() {
    super();
    this.state = { editing: false };
    this.edit = this.edit.bind(this);
    this.save = this.save.bind(this);
    this.remove = this.remove.bind(this);
  }

  edit() {
        this.setState({editing: true});
  }

  save() {
        this.props.updateCommentText(this.refs.newText.value, this.props.index);
        this.setState({editing: false});
  }

  remove() {
        this.props.deleteFromBoard(this.props.index);
  }

  renderNormal () {
      return (
        <div className="commentContainer">
          <label> {this.props.children}</label>
          <Button blue onClick={this.edit}>Edit</Button>
          <Button red onClick={this.remove}>Remove</Button>
        </div>
      );
  }

  renderForm () {
        return (
          <div className="commentContainer">
            <TextField ref="newText" placeholder={this.props.children} />
            <Button green onClick={this.save}>Save</Button>
          </div>
        );
  }

  render() {
    if(this.state.editing) {
        return this.renderForm();
    } else {
        return this.renderNormal();
    }
  }
}

export default Comment;