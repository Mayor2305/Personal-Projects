import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import contact from './../components/contact'
import Home from './../components/Home'
import Item from './../components/Item'
import Portfolio from './../components/Portfolio'
import NotFoundPage from './../components/NotFoundPage'
import Header from './../components/Header'


const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            
            <Switch> {/*stops when a page match is found*/}
                <Route path="/" component={Home} exact={true}/>
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route path="/portfolio/:id" component={Item}/>
                <Route path="/contact" component={contact}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;
