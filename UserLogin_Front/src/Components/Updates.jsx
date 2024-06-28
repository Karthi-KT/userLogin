import { useEffect, useState } from "react";
import axios from "axios";

const Updates = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    console.log(courses);
    axios
      .get("http://localhost:3001/courses")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen p-8">
      <div className="w-full max-w-5xl space-y-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          Upcoming New Courses
        </h1>
        <div className="space-y-12">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`flex flex-col md:flex-row ${
                course.id % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center`}
            >
              <div className="md:w-3/5 w-full p-6">
                <h2 className="text-2xl font-semibold mb-4">{course.title}</h2>
                <p className="text-lg">{course.description}</p>
                <button className="cursor-pointer rounded-md mt-4 hover:bg-blue-600">
                  More about the Course
                </button>
              </div>
              <div className="md:w-2/5 w-full flex justify-center p-6">
                <img
                  src={course.imgSrc}
                  alt={course.title}
                  className="rounded-lg shadow-lg max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
