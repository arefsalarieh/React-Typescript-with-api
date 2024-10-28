export type courseAndBlogsType = {
    id:string,
    courseOrBlogName:string,
    describe:string,
    type:string,
    cost:string,
    likeCount:number,
    rate:number,
    rateCount:number
}

export type createCourseAndBlogsType = {
    courseOrBlogName:string,
    describe:string,
    type:string,
    cost:string,
    likeCount:number,
    rate:number,
    rateCount:number
}