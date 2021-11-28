import React from 'react';
import ReactDOM from 'react-dom';

class HOC extends React.Component {
    render() {
        return <div className=''>

        </div>
    }
}

function connect(obj) {
    return function(Com) {
        class Temp extends React.Component {
            state = {
                sex: 0
            }
            render() {
                return <Com {...obj} {...this.props} sex={this.state.sex}/>
            }
        }
        return Temp
    }

}
HOC = connect({name:'jiaxin', age: 12})(HOC)

export default HOC





