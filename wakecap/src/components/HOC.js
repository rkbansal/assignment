import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const PrivateRoute = ({component: Component, ...rest}) => {

if(localStorage.getItem('token') !== 'valid'){
    if(rest.noRedirect){
        return(<Route {...rest} render={(props)=>(<Component {...props}/>)}/>);
    }
    else {
        return(<Route {...rest} render={(props)=>(<Redirect to={{
            pathname: '/login',
            state: {from :rest.location},
            }}
            />
        )}/>
    );
    }
}else{
    if(rest.noRedirect){
        return(<Route {...rest} render={(props)=>(<Redirect to={{
                pathname: '/',
                state: {from :rest.location},
            }}
        />)}
    />);
    }else{
        return(<Route {...rest} render={(props)=>(<Component {...props}/>)}/>);
    }
}
};

export default PrivateRoute;