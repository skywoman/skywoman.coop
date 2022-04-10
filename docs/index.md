# Skywoman
> _PROMPT_: What is Skywoman?

## Pods
> _PROMPT_: What are pods?

Here is an example of the info we might include for each pod,
as defined in `./pods.yml`:

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

## Regions
> _PROMPT_: Something about regions?

## Events
> _PROMPT_: How are events scheduled? Who to contact?

<!-- TODO: maybe embed a google calendar here -->
