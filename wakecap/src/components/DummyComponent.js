import React from 'react';
const Dashboard = () => {
    let arr = window.location.href.split('/');
    let route = arr[arr.length - 1];
    return <div className="dummy-component">
                <div className="font-50">{route.toLocaleUpperCase()} is intentionally left blank.</div>
                <div className="font-50">Please check workers section some iteresting stuff. Good Day!!</div>
            </div>;
};

export default Dashboard;