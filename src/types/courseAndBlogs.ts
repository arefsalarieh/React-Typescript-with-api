export type courseAndBlogsType = {
    id:string,
    courseOrBlogName:string,
    describe:string,
    type:string,
    cost:string,
    likeCount:number,
    rate:number,
    rateCount:number,
    tech:string

}

export type createCourseAndBlogsType = {
    courseOrBlogName:string,
    describe:string,
    type:string,
    cost:string,
    likeCount:number,
    rate:number,
    rateCount:number,
    tech:string
}