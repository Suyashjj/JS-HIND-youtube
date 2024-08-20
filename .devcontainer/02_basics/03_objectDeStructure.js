//de structuring

const course ={
    coursename : "js hindi",
    price : "200",
    courseInstructor : "hitesh",
}
//course.courseInstructor

const {courseInstructor: instructor} =course //here we defined small name
// console.log(courseInstructor)
console.log(instructor);

//in react  

const navbar =({company}) => {      //syntax.  If u see {} means destrucring is done

}
navbar(company="suyash")

//In api

// "name" : "suyahs"
// "age" : "20"

// [
//     {},
//     {},
//     {},
// ]


