import React, { Component } from 'react';
import WorkerProfile from './WorkerDetails/WorkerProfile';
import Supervisor from './WorkerDetails/Supervisor';
import IconWithLabel from './WorkerDetails/IconWithLabel';
import CalendarIcon from '@atlaskit/icon/glyph/calendar';
import LocationIcon from '@atlaskit/icon/glyph/location';
import Button from '@atlaskit/button';
import HelmetInfoBox from './WorkerDetails/HelmetInfoBox';
import BarChart from './WorkerDetails/BarChart';

class WorkerDetails extends Component {
    render() {
        var worker = this.props.workers[this.props.number];
        return (
            <React.Fragment>
                <div className="flex-row row-basic-info">
                    <WorkerProfile name={worker.nm} designation={worker.designation}/>
                    <div className="assest_tag_id">
                        <div>Asset ID: {worker.assest_id}</div>
                        <div>Tag ID: {worker.tag_id}</div>
                    </div>
                    <Supervisor name={worker.supervisor.name} designation={worker.supervisor.designation}/>
                </div>
                <div className="flex-row row-hours-info">
                    <div className="worker-history">
                        <IconWithLabel icon={CalendarIcon} heading="Total Hours Worked" body={worker.total_hours_worked}/>
                        <IconWithLabel icon={LocationIcon} heading="Last Active Zone" body={worker.last_active_zone}/>
                        <div className="full_history">
                            <Button appearance="help" shouldFitContainer>Full History</Button>
                        </div>
                    </div>
                    <div className="bar-chart">
                        <BarChart hours={worker.hours}/>
                    </div>
                </div>
                <div className="flex-row-only">
                    <div className="assigned_text">Assigned Helmets</div>
                    <div className="row-assigned-helmet">
                        {worker.assigned_helmets.map((helmet, key)=> <HelmetInfoBox {...helmet} key={key}/>)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default WorkerDetails;