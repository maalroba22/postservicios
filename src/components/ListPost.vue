<template>
    <div>
        <h1 class="btn btn-danger">listado de Post</h1>
        <ul class="list_post">
            <li v-for="post in Posts " :key="post.id">{{ post.title }} </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import PostService from '@/services/PostService';

const service = new PostService()
const Posts = service.getPost()
onMounted(async () => {
    await service.fetchAll()
})



</script>

<style scoped lang="scss">
.list_post {
    width: 95%;
    height: 75px;
    padding: 20px;
    list-style-type: none;

    li {
        width: 100%;
        padding: 10px;
        border: 1px solid #ccc;
        color: $red;
    }
    li:hover{
        background-color: darken( #000000, 10%);
    }
   
}
</style>