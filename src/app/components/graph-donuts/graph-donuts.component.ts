import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, SingleDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graph-donuts',
  templateUrl: './graph-donuts.component.html',
  styles: []
})
export class GraphDonutsComponent {
  @Input() public doughnutChartLabels: Label[] = [];
  @Input() public doughnutChartData: SingleDataSet = [0, 0, 0];
  @Input() public doughnutChartType: ChartType;
  @Input() tituloChart: string = 'Titulo por defecto';

}
