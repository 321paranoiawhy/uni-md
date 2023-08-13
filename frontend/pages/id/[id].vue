<template>
  <p>{{ $route.params.id }}</p>
  <div>{{ data }}</div>
</template>

<script setup lang="ts">
const route = useRoute();

const id = computed(() => route.params.id as string);

const { data, pending, error, refresh } = await useFetch(
  `http://localhost:3002/uni-md`,
  {
    query: { id: id },
    // headers: { "Authorization": "Bear " },
  }
);

// const { data, pending, error, refresh } = await useFetch(
//   `http://localhost:3002/uni-md/${id}`
// );

// console.log(data.value);

// const result = await fetchUser(id.value);

// const { data: user, loading } = toRefs(result);

// useHead({
//   title: loading.value
//     ? "Loading"
//     : user.value
//     ? user.value.id
//     : "User not found",
// });

console.log("id:", route.params.id);
</script>
