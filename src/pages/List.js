import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            list: []
        };
    }

    componentDidMount() {
        fetch("http://localhost:8080/list")
            .then(res => res.json())
            .then(
            	  (result) => {
                    this.setState({
                        isLoaded: true,
                        list: result.data.list
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, list} = this.state;
        return (
            <div className="container">
                <h3>
                    리스트
                </h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                    </tr>
                    </thead>
                    <tbody>
                    {list.map(item=>(
                        <tr key={item.idx}>
                            <td>{item.idx}</td>
                            <Link to={"detail/"+item.idx}><td>{item.title}</td></Link>
                            <td>{item.writer}</td>
                            <td>{item.insertDate}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <Link to="/write">
                    <button className="btn btn-default">글쓰기</button>
                </Link>
            </div>
        );
    }
}

export default List;