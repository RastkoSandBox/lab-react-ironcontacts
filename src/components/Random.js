
import React, { Component } from 'react';



class Random extends Component {

    render() {
        const { min, max } = this.props;
        return (
            <div>
                <div>
                    Random value between {min} and {max};
            </div>

                <div>
                    <div>{Math.random()}</div>
                </div>

            </div>

        )

    }

}









export { Random };