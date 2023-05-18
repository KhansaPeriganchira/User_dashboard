import { Component } from '@angular/core';

//aarkano highcharts apply chayyunnad their  AreaChartComponent ts below one import chayyuga

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-area-chart',
  templateUrl: './area-chart.component.html',
  styleUrls: ['./area-chart.component.css']
})
export class AreaChartComponent {

  
  Highcharts=Highcharts//defined in ts here that in html ,//html ulladine evide define chaydu
  chartOptions={//defined as objects

  }

  //site open chayyummbo time chart varanam
  constructor(){
    this.chartOptions=

    {
      chart: {
          type: 'area'
      },
      title: {
          text: 'Work Experience Evaluation 2022-2023',
          align: 'center'
      },
      subtitle: {
          text: 'Luminar Technolab',
          align: 'center'
      },
      xAxis:{
              categories:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  
  
      },
      yAxis: {
          title: {
              useHTML: true,
              text: 'Salary increment'
          }
      },
      
      credits:{//koduthadd to remove highchart.com
        enabled:false,
      },
    
      tooltip: {
          shared: true,
          headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
      },
      plotOptions: {
         
          area: {
              stacking: 'normal',
              lineColor: '#666666',
              lineWidth: 1,
              marker: {
                  lineWidth: 1,
                  lineColor: '#666666'
              }
          }
      },
      series: [{
          name: 'IBM',
          data: [13234, 12729, 11533, 17798, 10398, 12811, 15483, 16196, 16197,17191,18134]
      }, {
          name: 'INFOSYS',
          data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,16197,17191,18134,]
  
      }, {
          name: 'TCS',
          data: [4752, 4820, 4877, 4925, 5006, 4976, 4946, 4911, 4913,16214,16345,2345]
      }, {
          name: 'MIND TREE',
          data: [3164, 3541, 3898, 4115, 3388, 3569, 3887, 4593, 1550,16214,16345,2345]
  
      }, {
          name: 'THINK PALM',
          data: [2019, 2189, 2150, 2217, 2175, 2257, 2344, 2176, 2186,16197,17191,18134]
      },
      {
        name: 'CAPGEMINI',
        data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039,16197,17191,18134]
  
    },
    {
      name: 'ORACLE',
      data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]
  
  },
  {
    name: 'GOOGLE',
    data: [6685, 6535, 6389, 6384, 6251, 5725, 5631, 5047, 5039]
  
  }
  
  
    
    ]
  }
  HC_exporting(Highcharts);//module export chayyan koduthood area-chart right side ll download option varum 
  

}
}


