import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Detail extends Component {
    constructor(props) {
        super(props);
        this.serviceId = this.props.match.params.serviceId;
    }

    componentDidMount() {
        fetch("http://localhost:8080/withdraw/service/list", {
            method:'POST'
            , headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
            , body : JSON.stringify({ serviceId : this.serviceId })
        })
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

        return (
            <div className="container">
                <h3>
                    상세 {this.serviceId}
                </h3>
                <table className="table">
                    <tr>
                        <th>제목</th>
                        <td>
                            dddd
                        </td>
                    </tr>
                    <tr>
                        <th>작성자</th>
                        <td>
                            dddd
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={2}>내용</th>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다가나다
                        </td>
                    </tr>
                </table>
                <Link to="/list">
                    <button className="btn btn-default">목록</button>
                </Link>
                <Link to="/write?">
                    <button className="btn btn-default">수정</button>
                </Link>
            </div>
        );
    }
}

export default Detail;