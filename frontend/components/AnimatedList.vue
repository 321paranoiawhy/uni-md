<template>
  <div>
    <button @click="addItem">Push</button>
    <!-- <button @click="removeItem">Pop</button> -->
    <transition-group :name="props.animation" tag="ul">
      <li v-for="(item, index) in list" :key="item" class="item" @click="removeItem(index)">
        Item: {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
type Animation = {
  Opacity: 'opacity',
  Fade: 'fade',
  Stagger: 'stagger',
  SlideLeft: 'slide-left',
  SlideRight: 'slide-right',
}
// const enum Animation {
//   Opacity = 'opacity',
//   Fade = 'fade',
//   Stagger = 'stagger',
//   SlideLeft = 'slide-left',
//   SlideRight = 'slide-right',
// };

const props = defineProps<{
  animation: keyof typeof Animation,
}>();

const list = ref([1, 2, 3]);

const removeItem = (index: number) => {
  list.value.splice(index, 1);
};

const addItem = () => {
  list.value.splice(0, 0, +Math.random().toFixed(2));
  // list.value.push();
};
</script>

<style scoped>
div {
  text-align: center;
}

button {
  /* margin-right: 10px; */
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 16px;
  padding: 4px 8px;
  font-weight: 500;
  cursor: pointer;
}

ul {
  padding: 0;
}

.item {
  width: 150px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: 3px 5px 10px gray;
  padding: 5px 0;
  margin: 5px auto;
  list-style: none;
}

/* 
Adding animations for list items
*/
.list-enter-active {
  /* animation: fade-in 0.5s ease-in-out; */
  animation: opacity-in-out 0.5s ease-in-out;
}

.list-leave-active {
  /* animation: fade-in 0.5s ease-in-out reverse; */
  animation: opacity-in-out 0.5s ease-in-out reverse;
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }

  100% {
    transform: translateX(0px);
  }
}

/* 透明度过渡动画 */
@keyframes opacity-in-out {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
