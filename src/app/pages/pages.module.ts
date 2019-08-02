import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import {FormsModule} from '@angular/forms';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

import { ChartsModule } from 'ng2-charts';
import { GraphDonutsComponent } from '../components/graph-donuts/graph-donuts.component';


@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent,

        //Temp
        IncrementadorComponent,

        GraphDonutsComponent
    ],
    imports: [ 
        CommonModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        ChartsModule
     ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        PagesComponent
    ],
    providers: [],
})
export class PagesModule {}