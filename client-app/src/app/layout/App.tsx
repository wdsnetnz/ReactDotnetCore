import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'semantic-ui-react';
import { Activity } from '../models/activity';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import {v4 as uuid} from 'uuid'; // npm i --save-dev @types/uuid
import agent from '../api/agent';
import LoadingComponent from './LoadingComponent';

function App() {
  // pass the Activity object.
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    // adding the interface here, Activity
    agent.Activities.list().then(response => {
    let activities: Activity[] = [];
    
    response.forEach((activity) => {
      activity.date = activity.date.split('T')[0];
      activities.push(activity);
    })
      console.log(response);
      setActivities(activities);
      setLoading(false);
    })
  }, [])

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find(x => x.id === id))
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectActivity(id) : handleCancelSelectActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    setSubmitting(true);
      if (activity.id) {
        agent.Activities.update(activity).then(() => {
          setActivities([...activities.filter(x =>x.id != activity.id), activity])
          setSelectedActivity(activity);
          setEditMode(false);
          setSubmitting(false);
      })
      }else {
        activity.id = uuid();
        agent.Activities.create(activity).then(() => {
          setActivities([...activities, activity])
          setSelectedActivity(activity);
          setEditMode(false);
          setSubmitting(false);
        })
    }

    activity.id
      ? setActivities([...activities.filter(x => x.id !== activity.id), activity])
      : setActivities([...activities, {...activity, id: uuid()}]);
      setEditMode(false);
      setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    setActivities([...activities.filter(x => x.id !== id)]);
  }

  if (loading) return <LoadingComponent content='Loading app' />

  return (
    // you need to use here duv or fragment, in a nother way you can use fragment with <>
    <>
     <NavBar openForm={handleFormOpen}/>  
     <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={handleFormOpen}
          closeForm={handleFormClose}
          createOrEdit={handleCreateOrEditActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
        />
     </Container>      
    </>           
  );
}

export default App;
