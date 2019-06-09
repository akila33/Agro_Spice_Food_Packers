import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-usage-chart',
  templateUrl: './usage-chart.component.html',
  styleUrls: ['./usage-chart.component.scss']
})
export class UsageChartComponent implements OnInit {


  constructor(private productService:ProductService) { }

  report:any;
  labels : string[] = [];
  counts: number[]=[];
  ratings:number[]=[];

  LineChart=[];
  BarChart=[];

  ngOnInit() {
    this.productService.getProducts().subscribe(data=>{
      //console.log(data["products"]);
      let i=0;
      while(i<data["products"].length){
        this.labels.push(data["products"][i]["title"]);
        this.counts.push(data["products"][i]["price"]);
        this.ratings.push(data["products"][i]["averageRating"]);
        i++;
      }
      this.generateGraph();
      this.generateGraphLine();
    });
  
  }

  generateGraph(){
    const BarChart=new Chart('linechart',{
      type:'bar',
      data:{
        labels:this.labels,

        datasets:[{
          label:"Product Price Variation",
          data:this.counts,
          fill:false,
          lineTension:0.2,
          borderColor:"green",
          borderWidth:1,
        }]
      },

      options:{
        title:{
          text:"Price variation",
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

  generateGraphLine(){
    const LineChart=new Chart('barchart',{
      type:'line',
      data:{
        labels:this.labels,

        datasets:[{
          label:"",
          data:this.ratings,
          fill:false,
          lineTension:0.2,
          borderColor:"red",
          borderWidth:1,
        }]
      },

      options:{
        title:{
          text:"Average Ratings",
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
