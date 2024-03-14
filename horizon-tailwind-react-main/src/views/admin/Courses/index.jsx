import CourseCard from "./components/CourseCard";
import { ButtonLogOut } from "./components/randomButton";

const Test = () => {
  return (
    <div>
      {/* Card widget */}

      <div className="mt-3 w-[335px]">
    <ButtonLogOut></ButtonLogOut>
</div>


      {/* Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
        <CourseCard text="Course Card 1" progress={90}/>
        <CourseCard text="Course Card 1" progress={90}/>

        <CourseCard text="Course Card 1" progress={90}/>

        <CourseCard text="Course Card 1" progress={90}/>

        <CourseCard text="Course Card 1" progress={90}/>


      </div>

      {/* Tables & Charts */}

      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
        {/* Check Table */}
        <div>
          
        </div>

        {/* Traffic chart & Pie Chart */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          
        </div>

        {/* Complex Table , Task & Calendar */}

        

        {/* Task chart & Calendar */}

        <div className="grid grid-cols-1 gap-5 rounded-[20px] md:grid-cols-2">
          
        </div>
      </div>
    </div>
  );
};

export default Test;
