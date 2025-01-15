import '../App.css';
import CoursesCard from "@/components/CoursesCard.tsx";


import dsaimage from "/CourseImages/dsa.jpg";
import javaimage from "/CourseImages/java.jpg";
import webtech from "/CourseImages/webtech.jpg";
import python from "/CourseImages/python.jpg";

// import ebook from "/CourseImages/ebook.png";
// import employeeManagement from "/CourseImages/employeemanagement.png";
// import react from "/CourseImages/react.png";
// import landingPage from "/CourseImages/landingpage.png";
// import youtube from "/CourseImages/youtube.png";
// import portfolio from "/CourseImages/portfolio.png";
// import nodejs from "/CourseImages/nodejs.png";
// import student2developer from "/CourseImages/student2developer.png";




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
        courseImage: dsaimage,
        courseTittle: "Basic DSA 1.0 - Beginner",
        tags: ["DSA", "Problem Solving"],
        mainFeatures: ["Core Language", "DSA", "Practice Problems", "Problem Solving"],
        directingLink: "https://student2developer.graphy.com/courses/DSA-65a278f8e4b095f02bc88b20",
        price: 1999
    },
    {
        courseImage: javaimage,
        courseTittle: "Java 1.0 - Beginner",
        tags: ["Java", "Beginner", "Core"],
        mainFeatures: ["Core Language", "Object-Oriented Programming", "Problem Solving", "Beginner Friendly"],
        directingLink: "https://student2developer.graphy.com/courses/Internship-on-Core-Java-65bcb707e4b03f57ef1804e4",
        price: 1999
    },
    {
        courseImage: webtech,
        courseTittle: "Web Technologies 1.0",
        tags: ["HTML", "CSS", "JavaScript"],
        mainFeatures: ["Web Development Basics", "HTML", "CSS", "JavaScript"],
        directingLink: "https://student2developer.graphy.com/courses/Web-Technologies-10-65d0acdbe4b03d99d50119a8",
        price: 1999
    },
    {
        courseImage: python,
        courseTittle: "Core Python - Beginner",
        tags: ["Python", "Beginner", "Core "],
        mainFeatures: ["Hands-on coding exercises", "Build practical Python projects", "Problems based", "Core Language"],
        directingLink: "https://student2developer.graphy.com/courses/Core-Python---Begineer-6654e84000eff209c7595899",
        price: 1999
    }
];





// const courseData = [
//     {
//         courseImage: dsaimage,
//         courseTittle: "Basic DSA 1.0",
//         tags: ["DSA", "Problem Solving"],
//         mainFeatures: ["Core Language", "DSA", "Practice Problems", "Problem Solving"],
//         price: 1999
//     },
//     {
//         courseImage: javaimage,
//         courseTittle: "Java 1.0 - For beginner",
//         tags: ["Java", "Beginner", "Core"],
//         mainFeatures: ["Core Language", "Object-Oriented Programming", "Problem Solving", "Beginner Friendly"],
//         price: 1999
//     },
//     {
//         courseImage: webtech,
//         courseTittle: "Web Technologies 1.0",
//         tags: ["HTML", "CSS", "JavaScript"],
//         mainFeatures: ["Web Development Basics", "HTML", "CSS", "JavaScript"],
//         price: 1999
//     },
//     {
//         courseImage: python,
//         courseTittle: "Core Python - Beginner",
//         tags: ["Python", "Beginner", "Core "],
//         mainFeatures: ["Hands-on coding exercises", "Build practical Python projects", "Problems based", "Core Language"],
//         price: 1999
//     },
//     {
//         courseImage: employeeManagement,
//         courseTittle: "Employee Management",
//         tags: ["HR", "Backend", "Management"],
//         mainFeatures: ["Employee Records", "Attendance Tracking", "Payroll System", "Data Security"],
//         price: 2999
//     },
//     {
//         courseImage: nodejs,
//         courseTittle: "Node.js Development",
//         tags: ["Backend", "JavaScript", "API"],
//         mainFeatures: ["Server Setup", "Routing", "Middleware", "Database Integration"],
//         price: 1999
//     },
//     {
//         courseImage: student2developer,
//         courseTittle: "Student to Developer",
//         tags: ["Career", "Learning", "Skills"],
//         mainFeatures: ["Project-Based Learning", "Internship Opportunities", "Skill Building", "Career Growth"],
//         price: 2499
//     },
//     {
//         courseImage: landingPage,
//         courseTittle: "Landing Page Development",
//         tags: ["Frontend", "Design", "UI"],
//         mainFeatures: ["Hero Sections", "Responsive Layouts", "Call-to-Actions", "Fast Load Times"],
//         price: 6999
//     },
// ];

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
                            directingLink={course.directingLink}
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
