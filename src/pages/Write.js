import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Write extends Component {
	 constructor(props) {
	        super(props);
	 }
	 
	 state = {
			 title: '',
			 writer: '',
			 content:''
			  }
	 
//	 writeChange = (e) => {
//		    this.setState({
//		      [e.target.name]: e.target.value
//		    })
//		  }
     
     writeSubmit= (e) =>{
    	 
    		  e.preventDefault();
    	      this.props.onCreate(this.state);
    	      this.setState({
    	    	  title: '',
    	    	  writer:'',
    	    	  content:''
    	      })
    	      
    };

    render() {
        // const {error, isLoaded, list} = this.state;
        return (
            <div className="container">
                <h3>
                    글쓰기
                </h3>
                <form onSubmit={this.writeSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">제목</label>
                        <input type="text" className="form-control" id="title"  value={this.state.title} placeholder="제목을 입력하세요"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="writer">작성자</label>
                        <input type="text" className="form-control" id="writer"  value={this.state.writer} placeholder="이름"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">내용</label>
                        <textarea className="form-control" id="content"  value={this.state.content} placeholder="내용"/>
                    </div>
                    <button type="submit" className="btn btn-primary">제출</button>
                    <Link to="/list">
                        <button className="btn btn-default">목록</button>
                    </Link>
                </form>
            </div>
        );
    }
}

export default Write;