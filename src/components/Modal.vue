<template>
    <div :class='class'>
        <div class='content'>
            <header>{{ title }}</header>

            <section>
                <slot/>
            </section>

            <footer>
                <MyButton v-if='buttons.includes("cancel")' @click='$emit("cancel")' label='Cancel'/>
                <MyButton v-if='buttons.includes("confirm")' variant='primary' @click='$emit("confirm")' label='Confirm'/>
            </footer>
        </div>
    </div>
</template>

<style>
    .modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
    }
    .modal > .content {
        box-shadow: 0px 0px 20px var(--border-colour);
        margin: 15% auto;
        min-width: 30rem;
        max-width: 30rem;
        border-radius: var(--radius) var(--radius) 0 0;
        border: 1px solid var(--border-colour);
    }

    .modal.l { max-width: 40rem; }
    .modal.xl { max-width: 50rem; }
    .modal.xxl { max-width: 60rem; }

    .modal > .content > section {
        background: #eee;
        padding: 1rem;
    }

    .modal > .content > header {
        border-radius: var(--radius) var(--radius) 0 0;
        font-size: 2rem;
        padding: 1rem;
        background: #fff;
        border-bottom: 4px solid var(--border-colour);
    }

    .modal > .content > footer {
        padding: 1rem;
        background: #eee;
        display: flex;
        justify-content: flex-end;
        gap: 0.25rem;
    }
</style>

<script>
    import MyButton from './MyButton.vue'

    export default {
        props: {
            title: { required: true, type: String, },
            buttons: { type: Array, default: () => [ 'confirm', 'cancel' ] },
            size: { default: null, },
        },

        components: {
            MyButton,
        },

        computed: {
            class() {
                return ['modal', this.size].filter(I).join(' ')
            }
        },
    }
</script>
