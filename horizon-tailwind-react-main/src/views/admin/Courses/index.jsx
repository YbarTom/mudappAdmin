import React, { useState } from 'react';
import CourseCard from "./components/CourseCard";
import { ButtonLogOut } from "./components/randomButton";
import CourseCardPlus from "./components/CourseCardPlus";
import routes from 'routes';
import { Link } from "react-router-dom";

const Test = () => {

  return (
    <div>
      <div className="mt-3 w-[335px]">
        <Link key={3} to={"/admin/NewCourse"}>
          <ButtonLogOut text={"Create new course"} ></ButtonLogOut>
        </Link>
      </div>
      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <CourseCard text="Course Card 1" progress={90} />
        <CourseCard text="Course Card 1" progress={90} />

        <CourseCard text="Course Card 1" progress={90} />

        <CourseCard text="Course Card 1" progress={90} />

        <CourseCard text="Course Card 1" progress={90} />

        <Link key={3} to={"/admin/NewCourse"}>
          <CourseCardPlus />
        </Link>
      </div>

      {/* Tables & Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}

      </div>
    </div>
  );
};

export default Test;
