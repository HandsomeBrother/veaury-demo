<template>
    <div>
        adpter1:: HooksComponentVue
        <HooksComponentVue>
        </HooksComponentVue>
    </div>
</template>
<script setup lang="tsx">
import { HooksComponent } from './hooksComponent'
import { applyPureReactInVue } from 'veaury'

const HooksComponentVue = applyPureReactInVue(HooksComponent)
</script>