import {ref,Ref} from 'vue'
import IPost from '@/Interfaces/IPost'
class PostService {
    
    private post:Ref<Array<IPost>>

    constructor(){
        this.post =ref<Array<IPost>>([])
    }

    getPost():Ref<Array<IPost>>{
        return this.post
    }

    async fetchAll(): Promise<void>{
        try {
            const url  ='https://jsonplaceholder.typicode.com/posts'
            const response = await fetch(url)
            const json = await response.json()
            this.post.value = await json
            
        } catch (error) {
            console.log(error)
            
        }
    }


}

export default PostService