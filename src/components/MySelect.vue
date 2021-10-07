<template>
    <select class='myselect' :value='value' @input='$emit("input", $event.target.value)'>
        <option v-for='option in options' :value='option.value'>{{ option.label }}</option>
    </select>
</template>

<script>
    export default {
        props: {
            value: { required: true },
            options: { required: true, type: Array },
        },
    }
</script>
