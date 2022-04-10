# Skywoman
A platform for communities to develop their food sovereignty.

## Pods
<script setup>
  import pods from './pods.yml'
</script>

<div v-for="pod in pods">
  <h3>{{pod.name}}</h3>
  <p>{{pod.description}}</p>
  <ul>
    <li>
      Discord:&nbsp;
      <a :href="pod.channel" target="_blank">
        <code>{{`#pod_${pod.name.toLowerCase()}`}}</code>
      </a>
    </li>
  </ul>
</div>
