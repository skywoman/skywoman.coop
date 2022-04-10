<template>
  <base-card>
    <h3>{{ pod.name }}</h3>
    <p v-if="pod.description">{{ pod.description }}</p>
    <ul>
      <li v-if="pod.channel">
        Discord:&nbsp;
        <a :href="pod.channel" target="_blank">
          <code>{{ `#pod_${pod.name.toLowerCase()}` }}</code>
        </a>
      </li>
    </ul>
  </base-card>
</template>

<script>
import BaseCard from './base-card.vue';

export default {
  name: 'PodCard',
  components: {
    BaseCard,
  },
  props: ['pod'],
}
</script>

<style scoped>

</style>>
