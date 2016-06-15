import '../styles/main.sass'
import React from 'react'
import Header from './comm/Header'

class AppComponent extends React.Component {
    render() {
        return (
            <div className="index">
                <Header />
                <p>
                    出发地点
                </p>
                <p>
                    终点
                </p>
            </div>
        );
    }
}
AppComponent.defaultProps = {};
export default AppComponent;
