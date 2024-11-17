
import Chart from "react-apexcharts";
import {useState} from 'react';

export default function CandleStick({chartOptions,chartSeries,chartWidth})
{
    const [options,setOptions] = useState(chartOptions);
    const [series,setSeries] = useState(chartSeries);

    return (
        <div className="app">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={options}
                series={series}
                type="candlestick"
                width={chartWidth}
              />
            </div>
          </div>
        </div>
      );

}