import React, { Component } from 'react';

class Subject extends Component {
    // 반드시 render 함수가 선언되어야 함.
    // 클래스 안에 들어가있는 함수는 function을 생략할 수 있음.
    // Component 태그 안에는 하나의 최상위 태그만 사용해야 함.
    render() {
      return (
        <header>
              {/* 리팩토링 */}
              <h1><a href="/" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}>{this.props.title}</a></h1>
              {this.props.sub}
        </header>
      );
    }
}

export default Subject;