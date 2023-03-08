import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(precess.cwd(), 'posts')

export function getSortedPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map((fileNames)=>{
        const id = fileNames.replace(/\.md$/, '')

        const fullPath = path.join(postsDirectory, fileNames)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })
    return allPostsData.sort(({data: a}, {data: b}) => {
        if(a<b) {
            return 1
        } else if (a>b) {
            return -1
        } else {
            return 0
        }
    })
}