# Skywoman
A platform for communities to develop their food sovereignty.

## Pods
<script setup>
  import pods from './pods.yml'
</script>

<div v-for="pod in pods">
  <h3>{{pod.name}}</h3>
  <p>{{pod.description}}</p>
</div>
