"use client";
import { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

type FilledLineChartProps = {
  data: number[][];
  backgroundColors?: string[];
};

const FilledLineChart: React.FC<FilledLineChartProps> = ({
  data,
  backgroundColors = ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        new Chart(ctx, {
          type: "line",
          data: {
            labels: data[0].map((_, i) => {
              const date = new Date();
              date.setMonth(i);
              return date.toLocaleDateString("en-US", {
                month: "short",
                year: "numeric",
              });
            }),
            datasets: data.map((lineData, i) => ({
              data: lineData,
              fill: {
                target: "origin",
                above: backgroundColors[i % backgroundColors.length],
              },
              borderColor: backgroundColors[i % backgroundColors.length],
              backgroundColor: backgroundColors[i % backgroundColors.length],
              tension: 0.4,
            })),
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  color: "black",
                },
              },
              x: {
                ticks: {
                  color: "black",
                },
              },
            },
            plugins: {
              legend: {
                labels: {
                  color: "black",
                },
              },
            },
          },
        });
      }
    }
  }, [canvasRef, data, backgroundColors]);

  return (
    <canvas
      className="bg-purpleCustom"
      ref={canvasRef}
      style={{ color: "black" }}
    />
  );
};

export default FilledLineChart;
