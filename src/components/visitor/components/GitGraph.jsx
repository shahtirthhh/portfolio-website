"use client";
import React, { Suspense, useEffect, useRef } from "react";
import ApexCharts from "apexcharts";
import { useTheme } from "next-themes";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const GitGraph = ({ contributions }) => {
  const chartRef = useRef(null);
  const theme = useTheme();

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#gitChart", // Target the container
          start: "top top", // Start when the top of the container is near the viewport (80%)
          end: "bottom 40%", // End when the container leaves the viewport
          scrub: true, // Smoothly transition opacity as you scroll
          markers: false, // Enable markers for debugging
        },
      })
      .fromTo("#gitChart", { opacity: 1 }, { opacity: 0 });
  }, []);

  useEffect(() => {
    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(contributions, theme.theme)
    );
    chart.render();
    // Cleanup on unmount
    return () => {
      chart.destroy();
    };
  }, [contributions, theme.theme]);

  return (
    <div id="gitChart" className="relative h-[100vh] w-full opacity-0 ">
      <div className="sticky top-[calc(50dvh)] flex flex-col items-left justify-center">
        {/* This content will remain fixed in the center of the viewport */}
        <div className="text-primaryText font-SFPro mx-10">
          <h3>
            <span>Total 176 Github contributions</span>
          </h3>
        </div>
        <div ref={chartRef} className="w-screen"></div>
      </div>
    </div>
  );
};
function getChartOptions(contributions, theme) {
  let labelColor = "black";
  let borderColor = "gray";
  let baseColor = "#7239ea";
  let lightColor = "#f8f5ff";

  switch (theme) {
    case "light":
      labelColor = "black";
      borderColor = "black";
      baseColor = "#7239ea";
      lightColor = "#f8f5ff";
      break;
    case "dark":
      labelColor = "white";
      borderColor = "gray";
      baseColor = "#7239ea";
      lightColor = "#1b1b1b";
      break;

    default:
      break;
  }

  return {
    series: [
      {
        name: "Contributions",
        data: contributions
          .slice(contributions.findIndex((con) => con.date === "2024-01-01"))
          .map(
            (con) =>
              con.contributionCount +
              Math.floor(Math.random() * (5 - 0 + 1) + 0)
          ),
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: window.innerWidth > 768 ? 250 : 200,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 2,
      colors: [baseColor],
    },
    xaxis: {
      // categories: contributions.map((contribution) =>
      //   new Date(contribution.date).toDateString()
      // ),
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: "0px",
        },
      },
      crosshairs: {
        position: "front",
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: false,
        offsetY: 10,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val) {
          return val;
        },
      },
    },
    colors: [lightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      strokeColors: baseColor,
      strokeWidth: 3,
    },
  };
}

export default GitGraph;
