import React from "react";
import Comment from "./Comment";
import Button from "calcite-react/Button";

class Board extends React.Component {
      constructor() {
        super();
        this.state = { comments : [] };
        this.eachComment = this.eachComment.bind(this);
        this.removeComment = this.removeComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.add = this.add.bind(this);
      }

      add(text) {
            var arr = this.state.comments;
            arr.push(text);
            this.setState({comments: arr});
      }

      removeComment(i) {
        console.log("Removing comment: " + i);
        var arr = this.state.comments;
        arr.splice(i,1);
        this.setState({comments: arr});
      }

      updateComment(newText, i) {
        console.log("Updating comment...");
        var arr = this.state.comments;
        arr[i] = newText;
        this.setState({comments: arr});
      }

      eachComment(text, i) {
        return (<Comment
                    key={i}
                    index={i}
                    updateCommentText={this.updateComment}
                    deleteFromBoard={this.removeComment}
                >
                    {text}
                    </Comment>);
      }

      render() {
            return (
            <div>
                <Button onClick={this.add.bind(this, "No meaningful text added yet.")}>Add New Text</Button>
                <div>
                    {this.state.comments.map(this.eachComment)}
                </div>
            </div>
            );
      }
}

export default Board;