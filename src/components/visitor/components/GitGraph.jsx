"use client";
import React, { useEffect, useRef } from "react";
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
          trigger: "#gitChart",
          start: "top top",
          end: "bottom 50%",
          scrub: true,
          markers: true,
        },
      })
      .fromTo("#gitChart", { opacity: 1 }, { opacity: 0 })
      .fromTo("#gitChart", { opacity: 0 }, { opacity: 1 });
  }, []);

  useEffect(() => {
    const chart = new ApexCharts(
      chartRef.current,
      getChartOptions(contributions, theme.theme)
    );
    chart.render();
    return () => {
      chart.destroy();
    };
  }, [contributions, theme.theme]);

  return (
    <div>
      <div
        id="gitChart"
        className="border border-black relative h-[calc(100vh)] w-full"
      >
        <div className="sticky h-[calc(70dvh)] inset-0 flex flex-col items-left justify-center space-y-4 mx-10">
          {/* Chart heading */}
          <h3 className="text-primaryText font-SFPro">
            <span>Total 176 Github contributions</span>
          </h3>
          <div ref={chartRef} className="w-full h-[250px]"></div>
        </div>
      </div>
    </div>
  );
};

function getChartOptions(contributions, theme) {
  let labelColor = theme === "dark" ? "white" : "black";
  let borderColor = theme === "dark" ? "gray" : "black";
  let baseColor = "#7239ea";
  let lightColor = theme === "dark" ? "#1b1b1b" : "#f8f5ff";

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
      type: "area",
      height: 250,
      toolbar: { show: false },
    },
    dataLabels: { enabled: false },
    stroke: {
      curve: "smooth",
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: contributions.map((contribution) =>
        new Date(contribution.date).toLocaleDateString()
      ),
      labels: {
        style: { colors: labelColor, fontSize: "0px" },
      },
      title: {
        text: "Date",
        style: { color: labelColor, fontSize: "14px" },
      },
    },
    yaxis: {
      labels: {
        style: { colors: labelColor, fontSize: "12px" },
      },
      title: {
        text: "Contribution Count",
        style: { color: labelColor, fontSize: "14px" },
      },
    },
    fill: { opacity: 0.8 },
    tooltip: {
      style: { fontSize: "12px" },
      y: { formatter: (val) => val },
    },
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
    },
    markers: { strokeColors: baseColor, strokeWidth: 3 },
    colors: [lightColor],
  };
}

export default GitGraph;
