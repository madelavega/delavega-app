import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DropDownContainer from './DateSelector/Container';
import EuroJackpotResults from './EuroJackpotResults/Container';
import Page404 from './errors/404';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <DropDownContainer defaultEmptyValue={true}/>
                </Route>
                <Route path="/results/:date(\d{2}-\d{2}-\d{4})" component={EuroJackpotResults} />
                <Route path="*" component={Page404}/>
            </Switch>
        </BrowserRouter>
    );
}



