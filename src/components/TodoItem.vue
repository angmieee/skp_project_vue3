<template>
    <div class="todo-item">
        <div class="item-text">
            <el-checkbox v-model="checkboxModel" class="checkbox" />
            <span :class="{ checked: checkboxModel }">
                {{ task.name }}
            </span>
        </div>
        <q-icon class="icon" @click="onDelete" name="close" />
    </div>
    <q-separator />
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

interface Props {
    task: { id: string; name: string; completed: boolean };
}

const props = withDefaults(defineProps<Props>(), {
    task: () => ({
        id: '001',
        completed: true,
        name: 'tododo',
    }),
});

const store = useStore();

const checkboxModel = computed({
    get() {
        return props.task.completed;
    },
    set(value) {
        store.commit('todos/toggleStatus', props.task.id);
    },
});

const onDelete = () => {
    store.commit('todos/delete', props.task.id);
};
</script>

<style lang="scss" scoped>
$text-color-secondary: #909399;
.todo-item {
    padding: 0.5rem;
    color: $text-color-secondary;
    margin: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .checkbox {
        margin-right: 1rem;
    }
    .checked {
        text-decoration: line-through;
        color: var(--text-secondary);
    }
    .icon {
        cursor: pointer;
        font-size: 1.5rem;
    }
}
</style>
