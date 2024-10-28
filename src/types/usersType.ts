type CourseRated={
    courseId:string,
    rateCount:number
}
export type users = {
    email: string,
    password: string,
    token: string,
    id: string
    favoriteCourses:string[],
    courseRated:CourseRated[]
}