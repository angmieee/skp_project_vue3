<template>
    <div class="todo-list">
        <TodoInput />
        <div class="list-container">
            <TodoItem v-for="todo in todos" :key="todo.id" :task="todo" />
        </div>
        <div class="footer">
            <!-- <span>{{ taskLeft }} left</span> -->
            <div class="filter-buttons">
                <button v-for="filterType in filterTypes" :key="filterType">
                    <!-- :class="{ active: filter === filterType }" -->
                    <!-- @click="setFilter(filterType)" -->
                    {{ filterType }}
                </button>
            </div>

            <button @click="clearCompleted">{{ clearCompletedTxt }}</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import TodoInput from './TodoInput.vue';
import TodoItem from './TodoItem.vue';

// import { computed } from 'vue';
// import { useStore } from 'vuex';

// import { useTodoList } from '../composables/useTodoList';
import { useQuasar } from 'quasar';

// const store = useStore();
// const { setFilter, todos, filter } = useTodoList();
const todos: { id: string; name: string; completed: boolean }[] = [
    { id: '001', name: '晚上和朋友一起吃个饭', completed: false },
    { id: '002', name: '洗个澡', completed: false },
    { id: '003', name: '冲杯咖啡', completed: false },
];
const $q = useQuasar();

const filterTypes = ['全部', '未完成', '已完成'];
const clearCompletedTxt = '清除已完成';

// const taskLeft = computed(function () {
//     return store.getters['todos/active'].length;
// });

const clearCompleted = () => {
    $q.dialog({
        title: '确认',
        message: '你想清除已完成的任务吗？',
        cancel: true,
        persistent: true,
    }).onOk(() => {
        // store.commit('todos/clearCompleted');
    });
};

// return {
//     todos,
//     filter,
//     taskLeft,
//     filterTypes: ['All', 'Active', 'Completed'],
//     setFilter,
//     clearCompleted,
// };
</script>

<style lang="scss">
$bg-color: #ecf5ff;
$text-color-secondary: #909399;
.todo-list {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    .list-container {
        flex-grow: 1;
        overflow: auto;
        background: $bg-color;
        border-radius: 0.3rem;
        padding: 0.5rem;
        margin-top: 1rem;
        margin-bottom: 0.3rem;
    }
    .footer {
        background: $bg-color;
        display: flex;
        padding: 1rem;
        align-items: center;
        color: $text-color-secondary;
        button {
            background: none;
            border: none;
            color: inherit;
            margin-right: 1rem;
            cursor: pointer;
        }
        .filter-buttons {
            margin-left: 3rem;
            flex-grow: 1;
            button.active {
                color: #3bd1f2;
            }
        }
    }
}
</style>
