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
  // Function to split long labels into multiple lines
  const formatLabels = (labels: string[]) => {
    return labels.map(label => {
      // Split at common breakpoints or after certain character count
      if (label.length > 20) {
        const words = label.split(' ');
        if (words.length >= 2) {
          const midpoint = Math.ceil(words.length / 2);
          return [
            words.slice(0, midpoint).join(' '),
            words.slice(midpoint).join(' ')
          ];
        }
      }
      return label;
    });
  };

  const chartData = {
    labels: formatLabels(data.labels),
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
        ticks: {
          maxWidth: 150, // Limit width to force wrapping
          font: {
            size: 11, // Slightly smaller font for better fit
          },
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
          title: function (context: TooltipItem<'bar'>[]) {
            // Get the original label without array formatting/commas
            const originalLabel = data.labels[context[0].dataIndex];
            return originalLabel;
          },
          label: function (context: TooltipItem<'bar'>) {
            return `${context.dataset.label}: ${context.raw}%`;
          },
        },
      },
    },
  };

  return (
    <div className="h-80 md:h-96 overflow-x-auto">
      <div className="min-w-[600px] h-full">
        <Bar data={chartData} options={options} />
      </div>
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

export function SafetyPrecautionsChart() {
  const safetyData = {
    labels: [
      'Avoids Certain Places/Times',
      'Shares Location with Someone', 
      'Pretends to be on Phone Call',
      'Changes Route Frequently',
      'Carries Keys for Defense',
      'Avoids Going Out Alone'
    ],
    data: [75, 62, 58, 55, 45, 40],
    source: 'Illustrative data based on common findings (e.g., UK Nat. Travel Attitudes Study)'
  };

  // Format labels for better display
  const formatLabels = (labels: string[]) => {
    return labels.map(label => {
      const words = label.split(' ');
      let lines = [];
      let currentLine = '';
      
      words.forEach(word => {
        if ((currentLine + word).length > 16) {
          lines.push(currentLine.trim());
          currentLine = '';
        }
        currentLine += word + ' ';
      });
      lines.push(currentLine.trim());
      return lines;
    });
  };

  const chartData = {
    labels: formatLabels(safetyData.labels),
    datasets: [
      {
        label: '% of Women Reporting Use',
        data: safetyData.data,
        backgroundColor: '#8b5cf6',
        borderColor: '#7c3aed',
        borderWidth: 1,
        borderRadius: 4,
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
        ticks: {
          callback: function(value: any) {
            return value + '%';
          },
        },
        grid: {
          color: 'rgba(0,0,0,0.05)',
        },
      },
      y: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: safetyData.source,
        position: 'bottom' as const,
        color: '#6b7280',
        font: {
          size: 10,
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
    <div className="h-80 md:h-96 overflow-x-auto">
      <div className="min-w-[600px] h-full">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}