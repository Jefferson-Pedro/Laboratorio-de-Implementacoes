import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  chardata: any;

  labeldata: any[];
  realdata: any[];
  colordata: any[];

  constructor(private service: DashboardService){}


  ngOnInit(): void {
    this.consultaDados()
    this.chartRender();
  }

  chartRender(){

    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"];
    let valores = [0,0,0,0,0];
    let label = ['Numeros de Janeiro', 'Numeros de Fevereiro'];

    const myChart = new Chart('piechart', {
      type: 'bar', // altere o tipo de gráfico para `pie`
      data: {
        labels: meses,
        datasets: [{
          label: '# of Votes',
          data: valores,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  public consultaDados(){
    this.service.getJson().subscribe({
      next:(value)=> {
        console.log(value);
        this.chardata = value;
        console.log(this.chardata[0].ano);
        console.log(this.chardata.valor);
        console.log(this.chardata.color);
        
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
