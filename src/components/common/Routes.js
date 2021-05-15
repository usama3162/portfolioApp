import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../mainpage/Header';
import Details from '../mainpage/Details';
import About from '../../pages/About';
import Contact from '../../pages/Contact';
import Blogs from '../../pages/Blogs';
import Projects from '../../pages/Projects';

const Routes = () => (
    <Switch>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/projects">
            <Projects />
        </Route>
        <Route path="/contact">
            <Contact />
        </Route>
        <Route path="/blogs">
            <Blogs />
        </Route>
        <Route path="/" exact>
            <Header />
            <Details />
        </Route>
    </Switch>
)

export default Routes;