export type CourseType = {
    description: string,
    id: number,
    title: string,
    videos: string[]
}

export type VideoType = {
    id: number,
    attachmentid: number,
    courseId: number,
    name: string,
    description: string,
    teacher: string,
    attachment: {
        id: number,
        fileName: string,
        filePath: string,
        createdAt: string,
        updatedAt: string,
        isDeleted: boolean
    }
}



