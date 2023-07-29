import React, { PureComponent } from 'react'; 
import { applyPureReactInVue } from 'veaury'


export class StatPanel extends PureComponent {
    render() {
        return <div> applyPureReactInVue: adpter1: StatPanel react3</div>
    }
}

export const StatPanelVue = applyPureReactInVue(StatPanel)