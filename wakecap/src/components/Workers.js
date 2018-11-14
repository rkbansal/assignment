import React, { Component } from 'react';
import WorkersList from './WorkersList';
import WorkerDetails from './WorkerDetails';
import { AppConsumer } from '../Provider/AppContext';
class Workers extends Component {

    render() {
        return (
        <AppConsumer>
            {(context)=>{
                return (
                <div className="worker-container">
                    <div className="workers-list">
                        <div className="caption">List of Workers</div>
                        <WorkersList workers={context.workers} selectLeftIndex={context.selectLeftIndex}/>
                    </div>
                    <div className="worker-details">
                        <WorkerDetails {...context}/>
                    </div>
                </div>
            )}}
        </AppConsumer>);
    }
}

export default Workers;