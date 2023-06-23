import { Component } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-employee-pie-chart',
  templateUrl: './employee-pie-chart.component.html',
  styleUrls: ['./employee-pie-chart.component.css']
})
export class EmployeePieChartComponent {
ctx:any;
config:any;
chartData:number[]=[];
chartDatalabels:any[]=[];

ngOnInit(){
  this.chartData.push(1);
  this.chartData.push(1);
  this.chartData.push(1);

  this.chartDatalabels.push("A");
  this.chartDatalabels.push("B");
  this.chartDatalabels.push("C");

  this.ctx=document.getElementById("myChart");
  this.config={
    type:"pie",
    Option:{
    },
    data:{
      labels:this.chartDatalabels,
      datasets:[{
        label:"Chart Data",
        data:this.chartData,
      }]
    }
  }
  const myChart=new Chart(this.ctx,this.config);
}

}


