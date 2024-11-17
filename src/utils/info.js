
const my_colors = {
    upward: '#20B2AA', /* should be some type of green */
    downward: '#B83C08' /* should be some type of red */
};

const candlestickObj = {
    colors:my_colors
};



const my_plotOptions = {
       candlestick: candlestickObj 
};

export const options= {
    chart: {
      id: "basic-candlestick"
    },
   plotOptions: my_plotOptions
  };

export const    series= [{
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
  }];

 