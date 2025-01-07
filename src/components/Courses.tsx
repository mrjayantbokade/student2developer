import '../App.css';
import CoursesCard from "@/components/CoursesCard.tsx";

import ebook from "/CourseImages/ebook.png";
import employeeManagement from "/CourseImages/employeemanagement.png";
import react from "/CourseImages/react.png";
import landingPage from "/CourseImages/landingpage.png";
import youtube from "/CourseImages/youtube.png";
import portfolio from "/CourseImages/portfolio.png";
import nodejs from "/CourseImages/nodejs.png";
import student2developer from "/CourseImages/student2developer.png";


// TODO:

// backend work

//
// keep in mind while developing backend in main features there should be
// 4 main features and in tags there should not be more than 3 tags and
// it should be {
//         backend/frontend,
//         programing language mostly used/js/ts,
//         advanced/basic
// }



const courseData = [
    {
        courseImage: ebook,
        courseTittle: "Online Book Platform",
        tags: ["Books", "API", "Backend"],
        mainFeatures: ["Authentication", "Middleware", "REST API", "Scalability"],
        price: 2499
    },
    {
        courseImage: youtube,
        courseTittle: "Youtube Backend",
        tags: ["Media", "Streaming", "Backend"],
        mainFeatures: ["Video Processing", "User Analytics", "Content Delivery", "Scalable APIs"],
        price: 3999
    },
    {
        courseImage: react,
        courseTittle: "React",
        tags: ["Frontend", "UI", "JavaScript"],
        mainFeatures: ["Component Design", "State Management", "Hooks", "Virtual DOM"],
        price: 1999
    },
    {
        courseImage: portfolio,
        courseTittle: "Portfolio Builder",
        tags: ["Design", "Frontend", "Personal"],
        mainFeatures: ["Custom Templates", "Responsive Design", "Animations", "SEO Optimization"],
        price: 399
    },
    {
        courseImage: employeeManagement,
        courseTittle: "Employee Management System",
        tags: ["HR", "Backend", "Management"],
        mainFeatures: ["Employee Records", "Attendance Tracking", "Payroll System", "Data Security"],
        price: 2999
    },
    {
        courseImage: nodejs,
        courseTittle: "Node.js Development",
        tags: ["Backend", "JavaScript", "API"],
        mainFeatures: ["Server Setup", "Routing", "Middleware", "Database Integration"],
        price: 1999
    },
    {
        courseImage: student2developer,
        courseTittle: "Student to Developer",
        tags: ["Career", "Learning", "Skills"],
        mainFeatures: ["Project-Based Learning", "Internship Opportunities", "Skill Building", "Career Growth"],
        price: 2499
    },
    {
        courseImage: landingPage,
        courseTittle: "Landing Page Development",
        tags: ["Frontend", "Design", "UI"],
        mainFeatures: ["Hero Sections", "Responsive Layouts", "Call-to-Actions", "Fast Load Times"],
        price: 6999
    },
];

const Courses = () => {
    return (
        <section>
            <h1 className="px-5 text-white font-medium sm:font-normal font-sora py-10 text-2xl sm:text-4xl">
                Courses Offered
            </h1>
            <div className="w-screen scrollbar-hide overflow-x-scroll overflow-y-hidden flex">
                <div className="flex px-5 py-1 gap-5">
                    {courseData.map((course, index) => (
                        <CoursesCard
                            key={index}
                            courseImage={course.courseImage}
                            courseTittle={course.courseTittle}
                            tags={course.tags}
                            mainFeatures={course.mainFeatures}
                            price={course.price}
                        />
                    ))}
                </div>
                <div className={`h-full px-5`}>
                </div>
            </div>
        </section>
    );
};

export default Courses;
