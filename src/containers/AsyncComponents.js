import Loadable from 'react-loadable';
import {MEMBERS, SOURCES, CONCERTS} from './resources';
import React from 'react';

export const Loading = () => <div>Loading...</div>;

export const Home = Loadable.Map({
      loader: {
        Home: () => import('../components/Home/Home'),
      },
      loading: Loading,
      render(loaded, props) {
        let Home = loaded.Home.default;  
        return <Home {...props} />;
      },
    });

export const About = Loadable({
      loader: () => import('../components/About/About'),
      loading: Loading,
    });

 export const Members = Loadable.Map({
      loader: {
        Members: () => import('../components/Members/Members'),
      },
      loading: Loading,
      render(loaded, props) {
        let Members = loaded.Members.default;  
        return <Members {...props} members={MEMBERS}/>;
      },
    });

 export const Discography = Loadable.Map({
      loader: {
        Discography: () => import('../components/Discography/Discography'),
      },
      loading: Loading,
      render(loaded, props) {
        let Discography = loaded.Discography.default;  
        return <Discography {...props} sources={SOURCES}/>;
      },
    });


export const Calendar = Loadable.Map({
      loader: {
        Calendar: () => import('../components/Calendar/Calendar'),
      },
      loading: Loading,
      render(loaded, props) {
        let Calendar = loaded.Calendar.default;  
        return <Calendar {...props} concerts={CONCERTS}/>;
      },
    });

 export const Contact = Loadable({
      loader: () => import('../components/Contact/Contact'),
      loading: Loading,
    });