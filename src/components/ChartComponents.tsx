'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  TooltipItem,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

interface RegionalDataChartProps {
  region: string;
  data: {
    labels: string[];
    data: number[];
    source: string;
  };
}

export function RegionalDataChart({ region, data }: RegionalDataChartProps) {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Prevalence (%)',
        data: data.data,
        backgroundColor: '#a8e6a3',
        borderColor: '#86efac',
        borderWidth: 1,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y' as const,
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        grid: {
          color: 'rgba(0,0,0,0.05)',
        },
      },
      y: {
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `Key Statistics for ${region} (Source: ${data.source})`,
        color: '#403d39',
        font: {
          size: 16,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        pointStyle: 'rect',
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="h-80 md:h-96">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export function GlobalPrevalenceChart() {
  const data = {
    labels: ['Non-Partner Sexual Violence (Lifetime)', 'Other Women'],
    datasets: [
      {
        data: [6, 94],
        backgroundColor: ['#a8e6a3', '#e5e7eb'],
        borderColor: '#fefdfb',
        borderWidth: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          color: '#403d39',
          font: {
            size: 12,
          },
        },
      },
      title: {
        display: true,
        text: 'Global Lifetime Prevalence of Non-Partner Sexual Violence (WHO est.)',
        color: '#403d39',
        font: {
          size: 14,
          weight: 'bold' as const,
        },
      },
      tooltip: {
        padding: 12,
        boxPadding: 6,
        usePointStyle: true,
        pointStyle: 'rect',
        callbacks: {
          label: function (context: TooltipItem<'doughnut'>) {
            return `${context.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="h-80 md:h-96">
      <Doughnut data={data} options={options} />
    </div>
  );
}