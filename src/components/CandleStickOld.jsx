import React, { Component } from "react";
import Chart from "react-apexcharts";

class CandleStickOld extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-candlestick"
        },
      /*  plotOptions: {
            candlestick: {
              colors: {
                upward: '#3C90EB',
                downward: '#DF7D46'
              }
            }
          },
    */

      
      },
      
      
      series: [{
        data: [{
          x: new Date(2016, 1, 1),
          y: [51.98, 56.29, 51.59, 53.85]
        },
        {
          x: new Date(2016, 2, 1),
          y: [53.66, 54.99, 51.35, 52.95]
        },
        {
            x: new Date(2016, 3, 1),
            y: [53.66, 54.99, 51.35, 52.95]
        },
        {
            x: new Date(2016, 4, 1),
            y: [53.66, 54.99, 51.35, 52.95]
        },
     
        {
            x: new Date(2016, 5, 1),
            y: [53.66, 54.99, 51.35, 52.95]
          },
          {
              x: new Date(2016, 6, 1),
              y: [53.66, 54.99, 51.35, 52.95]
          },
          {
              x: new Date(2016, 7, 1),
              y: [53.66, 54.99, 51.35, 52.95]
          },
        {
          x: new Date(2016, 8, 1),
          y: [52.76, 57.35, 52.15, 57.03]
        }]
      }]
      
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="candlestick"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CandleStickOld;