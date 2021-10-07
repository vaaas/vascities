<template>
    <div class='defaultwrapper'>
        <section class='contents'>
            <slot/>
        </section>
    </div>
</template>

<style>
    .defaultwrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
</style>
