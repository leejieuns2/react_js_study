import React, { Component } from 'react';

class UpdateContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.data.id,
      title: this.props.data.title,
      desc: this.props.data.desc,
    };
    this.inputFormHandler = this.inputFormHandler.bind(this);
  }
  inputFormHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <article>
        <h2>Update</h2>
        <form
          action="/update_process"
          method="post"
          onSubmit={function (e) {
            e.preventDefault();
            // input 태그에 입력한 값을 가져옴
            // e.target.inputTagId.value 이런 형태로 받아오면 됨.
            this.props.onSubmit(
              this.state.id,
              this.state.title,
              this.state.desc,
            );
          }.bind(this)}
        >
          <input type="hidden" name="id" value={this.state.id}></input>

          {/* this.props.data.title은 readonly이기 때문에 수정이 안됨.*/}
          <p>
            <input
              type="text"
              name="title"
              placeholder="title"
              value={this.state.title}
              onChange={this.inputFormHandler}
            ></input>
          </p>
          <p>
            <textarea
              name="desc"
              placeholder="description"
              value={this.state.desc}
              onChange={this.inputFormHandler}
            ></textarea>
          </p>
          <p>
            <input type="submit"></input>
          </p>
        </form>
      </article>
    );
  }
}

export default UpdateContent;
