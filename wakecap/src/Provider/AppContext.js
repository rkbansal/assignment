import React, { Component } from 'react';
const AppContext = React.createContext();

export class AppProvider extends Component {
    constructor(props){
        super(props);
        this.state = {
            isAuthenticate: false,
            authenticate(cb) {
                this.setState({
                    isAuthenticate: true
                })
                setTimeout(cb,0);
            },
            logout(cb) {
                this.setState({
                    isAuthenticate: false
                })
                setTimeout(cb,0);
            },
            user:{
                name: "Prince Charlie",
                email: "test@test.com",
                password: "1234"
            },
            sites:["Bur Dubai", "Deira", "Sharjah", "The east coast", "Hatta", "Abu Dhabi"],
            number: 0,
            selectLeftIndex: (index) => {
                this.setState({
                    number: index
                });
            },
            workers: [{
                "id": 1,
                "id_number":"#12314112571",
                "nm": "George Washington",
                "designation":"Carpenters",
                "assest_id":"#3465",
                "tag_id":"#4161",
                "supervisor": {
                    "name":"Sir Srinivasa Bose",
                    "designation":"Supervisor"
                },
                "total_hours_worked":"2,658",
                "last_active_zone":"Zone 2",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"green"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"red"
                },{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"green"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"red"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [5, 7, 9, 8, 7, 12, 8, 10, 7]
              },
              {
                "id": 2,
                "id_number":"#12312511252",
                "nm": "John Adams",
                "designation":"Construction Laborers",
                "assest_id":"#5425",
                "tag_id":"#2172",
                "supervisor": {
                    "name":"Neeraj Sharma",
                    "designation":"Designation"
                },
                "total_hours_worked":"2,158",
                "last_active_zone":"Zone 1",
                "assigned_helmets":[{
                    "id":"#1221411451",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"red"
                },{
                    "id":"#12312512352",
                    "in":"IN-005",
                    "time_ago":"3 days ago",
                    "status":"green"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [4, 6, 10, 7, 9, 10, 8, 10, 7]
              },
              {
                "id": 3,
                "id_number":"#12313542252",
                "nm": "Jack Tyson",
                "designation":"Construction Managers",
                "assest_id":"#2163",
                "tag_id":"#6218",
                "supervisor": {
                    "name":"Vamsi Karma Singh",
                    "designation":"Designation"
                },
                "total_hours_worked":"3,541",
                "last_active_zone":"Zone 2",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"green"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"orange"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [6, 8, 9, 8, 5, 12, 5, 10, 6]
              },
              {
                "id": 4,
                "id_number":"#12413642173",
                "nm": "Thomas Jefferson",
                "designation":"Electricians",
                "assest_id":"#8172",
                "tag_id":"#1327",
                "supervisor": {
                    "name":"Jack Jacob Jubin",
                    "designation":"Designation"
                },
                "total_hours_worked":"2,456",
                "last_active_zone":"Zone 1",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"orange"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"green"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [5, 7, 9, 12, 7, 10, 8, 6, 7]
              },
              {
                "id": 5,
                "id_number":"#12423632193",
                "nm":"James Madison",
                "designation":"Operating Engineers",
                "assest_id":"#2713",
                "tag_id":"#2131",
                "supervisor": {
                    "name":"Kenith Ayapaa",
                    "designation":"Designation"
                },
                "total_hours_worked":"2,109",
                "last_active_zone":"Zone 2",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"green"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"red"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [9, 12, 10, 8, 5, 11, 8, 10, 7]
              },
              {
                "id": 6,
                "id_number":"#22343642573",
                "nm":"John Quincy Adams",
                "designation":"Equipment Operators",
                "assest_id":"#8271",
                "tag_id":"#2314",
                "supervisor": {
                    "name":"Trinadh Dubey",
                    "designation":"Designation"
                },
                "total_hours_worked":"3,158",
                "last_active_zone":"Zone 1",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"red"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"green"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [5, 8, 10, 12, 5, 5, 8, 10, 12]
              },
              {
                "id": 7,
                "id_number":"#32341632571",
                "nm": "Andrew Jackson",
                "designation":"Carpenters",
                "assest_id":"#5518",
                "tag_id":"#1293",
                "supervisor": {
                    "name":"Francis Desouza",
                    "designation":"Designation"
                },
                "total_hours_worked":"2,567",
                "last_active_zone":"Zone 2",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"green"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"orange"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [6, 5, 10, 6, 8, 10, 9, 8, 8]
              },
              {
                "id": 8,
                "id_number":"#32343654577",
                "nm": "Thomas Edition",
                "designation":"Construction Laborers",
                "assest_id":"#8172",
                "tag_id":"#6129",
                "supervisor": {
                    "name":"Gerard Tripathi",
                    "designation":"Designation"
                },
                "total_hours_worked":"2,158",
                "last_active_zone":"Zone 2",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"red"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"green"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [8, 6, 13, 7, 10, 11, 11, 9, 10]
              },
              {
                "id": 9,
                "id_number":"#42373612571",
                "nm": "Martin van Buren",
                "designation":"Construction Managers",
                "assest_id":"#4312",
                "tag_id":"#9121",
                "supervisor": {
                    "name":"Vaishnavi Sharma",
                    "designation":"Designation"
                },
                "total_hours_worked":"2,758",
                "last_active_zone":"Zone 1",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"yellow"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"green"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [5, 6, 8, 10, 12, 10, 8, 6, 5]
              },
              {
                "id": 10,
                "id_number":"#51173622578",
                "nm": "Mike Paul",
                "designation":"Electricians",
                "assest_id":"#6317",
                "tag_id":"#1234",
                "supervisor": {
                    "name":"Deepak Khatri",
                    "designation":"Designation"
                },
                "total_hours_worked":"2,679",
                "last_active_zone":"Zone 2",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"green"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"red"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [6, 10, 7, 12, 7, 10, 8, 10, 7]
              },
              {
                "id": 11,
                "id_number":"#21277522577",
                "nm": "Angel Maria",
                "designation":"Operating Engineers",
                "assest_id":"#3123",
                "tag_id":"#7123",
                "supervisor": {
                    "name":"Mam Shilpa Singh",
                    "designation":"Designation"
                },
                "total_hours_worked":"3,008",
                "last_active_zone":"Zone 1",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"orange"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"green"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [4, 9, 10, 7, 8, 12, 7, 8, 10]
              },
              {
                "id": 12,
                "id_number":"#51267522593",
                "nm": "Elon Musk",
                "designation":"Equipment Operators",
                "assest_id":"#1231",
                "tag_id":"#8786",
                "supervisor": {
                    "name":"Arvind",
                    "designation":"Designation"
                },
                "total_hours_worked":"4,123",
                "last_active_zone":"Zone 2",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"green"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"yellow"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [10, 6, 8, 7, 9, 12, 8, 10, 7]
              },
              {
                "id": 13,
                "id_number":"#71264521592",
                "nm": "Barack Obama",
                "designation":"Carpenters",
                "assest_id":"#8768",
                "tag_id":"#1234",
                "supervisor": {
                    "name":"Gauri",
                    "designation":"Designation"
                },
                "total_hours_worked":"3,158",
                "last_active_zone":"Zone 1",
                "assigned_helmets":[{
                    "id":"#1231411251",
                    "in":"IN-006",
                    "time_ago":"7 mins ago",
                    "status":"red"
                },{
                    "id":"#12312511252",
                    "in":"IN-008",
                    "time_ago":"2 days ago",
                    "status":"green"
                }],
                "pp": "",
                "tm": "1789-1797",
                "hours": [5, 7, 12, 7, 10, 11, 7, 12, 7]
              }
            ]            
        }
    }

    render() {
        return <AppContext.Provider value={this.state}>
        {this.props.children}
        </AppContext.Provider>
    }
};

export const AppConsumer = AppContext.Consumer;