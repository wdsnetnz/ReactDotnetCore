import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';

function App() {
  // pass the Activity object.
  const [activites, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    // adding the interface here, Activity
    axios.get<Activity[]>('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    })
  }, [])

  return (
    // you need to use here duv or fragment, in a nother way you can use fragment with <>
    <Fragment>
     <NavBar/>  
     <Container style={{marginTop: '7em'}}>
        <ActivityDashboard activities={activites}/>
     </Container>      
                  
           
    </Fragment>
  );
}

export default App;
