import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';              //entregue pronto, revisar
import CreateOrphanage from './pages/CreateOrphanage';  //entregue pronto, revisar

function Routes() {
    return (
        <BrowserRouter>
            <Switch >{/* Switch especify to just show one router in screen */}
                <Route path="/" exact component={Landing} /> {/* exact is used to doesnt verify '/' context and render */}
                <Route path="/app" component={OrphanagesMap} />
                
                <Route path="/orphanages/create" component={CreateOrphanage} />
                <Route path="/orphanages/:id" component={Orphanage} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;