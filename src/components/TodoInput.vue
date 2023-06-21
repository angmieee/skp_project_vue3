<template>
    <div class="todo-input">
        <el-input
            v-model="inputModel"
            outlined
            clearable
            name="todo"
            placeholder="新增待办"
            @keyup.enter="onAdd"
        ></el-input>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const inputModel = ref('');

const onAdd = (e) => {
    console.log('添加：');
    console.log(inputModel.value);
    // store.commit('todos/create', inputModel.value);
    inputModel.value = '';
    e.target.blur();
};
</script>

<style lang="scss" scoped>
.todo-input {
    background: var(--todo-bg-color);
    border-radius: 0.3rem;
}
</style>
