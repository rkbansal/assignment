import React from 'react';
const Dashboard = () => {
    let arr = window.location.href.split('/');
    let route = arr[arr.length - 1];
    return <div className="dummy-component">
                <div className="font-50">{route} component is intentionally left blank.</div>
                <div className="font-50">Please check workers section some iteresting stuff</div>
            </div>;
};

export default Dashboard;