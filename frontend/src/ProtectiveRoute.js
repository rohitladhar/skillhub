import React from 'react';
import{Route,Redirect} from 'react-router-dom';

function ProtectiveRoute({token,component:Component,...rest}){
    
    return <Route{...rest} render={()=>{
        if(token)
        {
            return <Component/>
        }
        else{
            return <Redirect to='/'/> 
        }

    }}/>;
}

export default ProtectiveRoute;