import React from "react";

class Preloder extends React.Component {

    render() {
        return (

            <div id="loader-wrapper" className="grid-x">
                <div className='wave'>
                    <div className='dot small-6 large-6'></div>
                    <div className='dot small-6 large-6'></div>
                    <div className='dot small-6 large-6'></div>
                    <div className='dot small-6 large-6'></div>
                </div>
            </div>
        );

    }

}

export default Preloder;