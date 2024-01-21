import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';

const ReclamationsChart = ({ reclamations }) => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (reclamations) {
      const statusCounts = {};

      reclamations.forEach((reclamation) => {
        const status = reclamation.status;
        statusCounts[status] = (statusCounts[status] || 0) + 1;
      });

      const chartData = {
        labels: Object.keys(statusCounts),
        datasets: [
          {
            data: Object.values(statusCounts),
            backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'], // Customize colors as needed
            hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
          },
        ],
      };

      setChartData(chartData);
    }
  }, [reclamations]);

  return (
    <div>
      {chartData && (
        <Doughnut
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
          }}
        />
      )}
    </div>
  );
};

export default ReclamationsChart;