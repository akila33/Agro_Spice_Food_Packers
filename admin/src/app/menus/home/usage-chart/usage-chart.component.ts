import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-usage-chart',
  templateUrl: './usage-chart.component.html',
  styleUrls: ['./usage-chart.component.scss']
})
export class UsageChartComponent implements OnInit {


  constructor() { }

  report:any;
  labels : string[] = [];
  counts: number[]=[];

  LineChart=[];

  ngOnInit() {
    this.labels=["Jan","Feb","Mar","Apr","May","june"];
    this.counts=[10,5,8,7,3,14];
    this.generateGraph();
  
  }

  generateGraph(){
    const LineChart=new Chart('linechart',{
      type:'line',
      data:{
        labels:this.labels,

        datasets:[{
          label:"Completed Invoices",
          data:this.counts,
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth:1,
        }]
      },

      options:{
        title:{
          text:"Invoices History",
          display:true
        },
        scales:{
          yAxes:[{
            ticks:{
              beginAtZero:true
            }
          }]
        }
      }
    });
  }
}
