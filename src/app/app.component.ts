import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // Months values
  public months = {
    jan: 10000,
    feb: 1500,
    march: 2000
  };

  // Months colors list
  public color = {
    janColor: 'Red',
    febColor: 'Green',
    marchColor: 'Purple'
  }

  // chart visible for refresh the chart
  public isChartVisible = true;

  //Bar chart
  public chartOptions: any = {
    responsive: true
  };
  public chartType: any = 'bar';
  public chartLegend = true;

  public chartData: any;
  public chartLabels: string[] = ['January', 'February', 'March'];

  constructor() {}

  /**
   * angular life cycle method
   * setup the base chart data
   */
  ngOnInit(): void {
    this.chartData = [
      {
        data: [this.months.jan, this.months.feb, this.months.march],
        label: '',
        backgroundColor: [
          this.color.janColor,
          this.color.febColor,
          this.color.marchColor
        ]
      }
    ];
  }

  /**
   * Refresh the data when user changes the month values
   * @param monthName
   */
  onMonthValueChange(monthName: string){
    if (this.months[monthName] < 0 || !this.months[monthName]) {
      this.months[monthName] = 0;
    }
    this.chartData = [
      {
        data: [this.months.jan, this.months.feb, this.months.march],
        label: '',
        backgroundColor: [
          this.color.janColor,
          this.color.febColor,
          this.color.marchColor
        ]
      }
    ];
    this.refreshChart();
  }

  /**
   * Refresh the chart if user changes color dropdown fields
   */
  onColorChange() {
    this.chartData = [
      {
        data: [this.months.jan, this.months.feb, this.months.march],
        label: '',
        backgroundColor: [
          this.color.janColor,
          this.color.febColor,
          this.color.marchColor
        ]
      }
    ];
    this.refreshChart();
  }

  /**
   * To switch the charts if user clicks on radio buttons
   * @param value
   */
  chartRadio(value: string) {
    this.chartType = value;
    this.refreshChart();
  }

  /**
   * To refresh the chart
   */
  refreshChart(){
    this.isChartVisible = false;
    setTimeout(() => {
      this.isChartVisible = true;
    });
  }

}
