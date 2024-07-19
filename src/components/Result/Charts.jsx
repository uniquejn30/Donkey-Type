import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
const Charts = ({ isTimer }) => {
    const [state, setState] = useState({
      series: [
        {
          name: 'Words',
          data: [30, 45, 60, 55, 65, 50, 40, 48, 55],
        },
        {
          name: 'Characters',
          data: [50, 65, 80, 75, 85, 70, 60, 68, 75], // Replace with your data
        },
      ],
      options: {
        chart: {
          height: 200,
          type: 'grid',
          zoom: {
            enabled: false,
          },
        },
        // dataLabels: {
        //   enabled: false,
        // },
        stroke: {
          curve: 'straight',
          colors: ['#f0cc18', '#5e6063'], // Yellow for Words, Grey for Characters
        },
        grid: {
          row: {
            colors: ['transparent'],
            opacity: 0.5,
          },
        },
        xaxis: {
          categories: Array.from({ length: 30 }, (_, index) => index + 1), // Replace with your time intervals
          tooltip: {
            enabled: false, // Set enabled property to false to remove x-axis toggles
          },
          labels: {
            style: {
              colors: '#5e6063', // Change the color of x-axis labels
            },
          },
        },
        yaxis: {
          title: {
            text: 'Words per minute',
            align: 'left',
            style: {
              color: '#5e6063', // Change the color of the title
              fontFamily: 'Roboto', // Change the font family
            },
          },
          labels: {
            style: {
              colors: '#5e6063', // Change the color of y-axis labels
              fontFamily: 'Roboto', // Change the font family
            },
          },
        },
        markers: {
          colors: ['#f0cc18', '#5e6063'], // Yellow for Words, Grey for Characters
          size: [4, 2], // Size of the markers
          strokeWidth: 0, // Border width of the markers
          hover: {
            size: 6, // Size of the markers on hover
          },
        },
      },
    });
  
    return (
      <div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="line" height={200} />
      </div>
    );

  };
  
  export default Charts;
  