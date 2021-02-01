<template>
    <div class="dialog-window" v-if="isOpenDialogWindow">
        <div class="dialog-window__content">
            <Button className="dialog-window__button" content="+" :buttonMethod="operationOnWindow" />
            <div class="dialog-window__controller">
                <p class="dialog-window__text">Добавить валюту на счёт:</p>
                <p>+</p>
                <p>-</p>
            </div>
        </div>
    </div>
</template>

<script>
    import Button from '../Button/Button';

    export default {
        name: 'DialogWindow',
        components: {
            Button,
        },
        props: {
            isOpenDialogWindow: {
                type: Boolean,
            },
            operationOnWindow: {
                type: Function,
            }
        }
    }
</script>

<style lang="scss" scoped>
    $color-bg-window: rgba(255, 255, 255, 0);
    $color-bg-sub_window: rgb(112, 112, 111);

    .dialog-window {
        background-color: $color-bg-window;
        padding: 8rem 35rem;
        position: absolute;
        height: 100vh;
        left: 0;
        top: 0;
        width: 100vw;

        &__content {
            background-color: $color-bg-sub_window;
            height: 100%;
            padding: 1rem;
            width: 100%;

        }

        &__button {
            align-items: center;
            display: flex;
            justify-content: center;
            margin-left: auto;
            transform: rotate(45deg);
        }

        &__controller {
            
        }

    }
</style>