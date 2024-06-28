import { useEffect } from "react";
import { select, arc } from "d3";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const courses = [
  { name: "Engineering Graphics", progress: 86, completed: 12, total: 14 },
  { name: "Mathematical Engineering", progress: 93, completed: 27, total: 29 },
  { name: "Computer Architecture", progress: 81, completed: 27, total: 30 },
  { name: "Database Management", progress: 96, completed: 24, total: 25 },
  { name: "Network Security", progress: 92, completed: 25, total: 27 },
];

const Progress = () => {
  useEffect(() => {
    courses.forEach((course, index) => {
      const svg = select(`#progress-${index}`)
        .append("svg")
        .attr("viewBox", "0 0 100 100")
        .attr("width", 60)
        .attr("height", 60);

      const arcGenerator = arc()
        .innerRadius(30)
        .outerRadius(35)
        .startAngle(-Math.PI / 2)
        .endAngle((Math.PI * 2 * course.progress) / 100 - Math.PI / 2);

      svg
        .append("path")
        .attr("fill", "#3b82f6") // Tailwind's blue-500
        .attr("d", arcGenerator)
        .attr("transform", "translate(50,50)");

      svg
        .append("text")
        .text(`${course.progress}%`)
        .attr("font-size", "14px")
        .attr("fill", "#3b82f6") // Tailwind's blue-500
        .attr("text-anchor", "middle")
        .attr("alignment-baseline", "middle")
        .attr("x", 50)
        .attr("y", 50);
    });
  }, []);

  return (
    <div>
      <h1 className="text-center text-2xl">Your Progress</h1>
      <div className="flex flex-wrap justify-between p-4">
        {courses.map((course, index) => (
          <div
            key={index}
            id={`progress-${index}`}
            className="shadow-md rounded-xl m-2 p-2 w-40 space-y-4"
          >
            <h3 className="text-sm font-semibold text-center mb-1">
              {course.name}
            </h3>
            <div className="flex justify-center"></div>
            <div className="text-center mt-2">
              <p className="text-sm">{`${course.completed}/${course.total}`}</p>
              <p className="text-gray-500 text-xs">Last 24 Hours</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Progress;
