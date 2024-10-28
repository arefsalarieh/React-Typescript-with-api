export type courseAndBlogsType = {
    id:string,
    courseName:string,
    describe:string,
    type:boolean,
    cost:string,
    likeCount:number,
    rate:number,
    rateCount:number
}

export type createCourseAndBlogsType = {
    courseName:string,
    describe:string,
    type:boolean,
    cost:string,
    likeCount:number,
    rate:number,
    rateCount:number
}