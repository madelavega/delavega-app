import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import DropDownContainer from './DateSelector/Container';
import EuroJackpotResults from './EuroJackpotResults/Container';
//import our delavega-lib web components
import 'delavega-lib';

import Page404 from './errors/404';

export default function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={`${appEnvConfig.environment.ROOT_PATH}`}>
                    <DropDownContainer defaultEmptyValue={true}/>
                </Route>
                <Route path={`${appEnvConfig.environment.ROOT_PATH}//results/:date(\\d{2}-\\d{2}-\\d{4})`} component={EuroJackpotResults} />
                <Route path="*" component={Page404}/>
            </Switch>
        </BrowserRouter>
    );
}




