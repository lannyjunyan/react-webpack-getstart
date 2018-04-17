import React from 'react';

class Component1 extends React.Component {
    render() {
        return (
            <div id='box' style={{ height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                Hello World!
            </div>
        )
    }
}


//导出组件
export default Component1;
