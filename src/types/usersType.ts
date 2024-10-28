type CoursesAndBlogsRated={
    coursesAndBlogsId:string,
    rateCount:number
}
export type users = {
    email: string,
    password: string,
    token: string,
    id: string
    favoriteCoursesAndBlogs:string[],
    coursesAndBlogsRated:CoursesAndBlogsRated[]
}