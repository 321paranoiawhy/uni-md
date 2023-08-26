<template>
  <div>
    <button @click="addItem">Push</button>
    <!-- <button @click="removeItem">Pop</button> -->
    <transition-group :name="props.animation" tag="ul" class="animation-list">
      <li
        v-for="(item, index) in list"
        :key="item"
        class="item"
        @click="removeItem(index)"
      >
        Item: {{ item }}
      </li>
    </transition-group>
  </div>
</template>

<script setup lang="ts">
/**
 * 支持的动画类型
 */
type Animation = "opacity" | "fade" | "stagger" | "slide-left" | "slide-right";

const props = defineProps<{
  animation: Animation;
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

<style scoped lang="scss">
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
.opacity-enter-active {
  animation: opacity 0.5s ease-in-out;
}

.opacity-leave-active {
  animation: opacity 0.5s ease-in-out reverse;
}

/* 透明度过渡动画 */
@keyframes opacity {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.fade-enter-active {
  animation: fade 0.5s ease-in-out;
}

.fade-leave-active {
  animation: fade 0.5s ease-in-out reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateX(30px);
  }

  100% {
    transform: translateX(0px);
  }
}

// stagger
// https://www.framer.com/motion/stagger/
// https://vuejs.org/guide/built-ins/transition-group.html#staggering-list-transitions
// .stagger-enter-active {
//   animation: stagger 0.5s ease-in-out;
// }

// .stagger-leave-active {
//   animation: stagger 0.5s ease-in-out reverse;
// }

// @keyframes stagger {
//   0% {
//     opacity: 0;
//     transform: scale(0.3) translateZ(0px);
//   }

//   100% {
//     opacity: 1;
//     transform: none;
//   }
// }

/* https://vuejs.org/guide/built-ins/transition-group.html#move-transitions */
.animation-list {
  position: relative;
  padding: 0 !important;
}

.stagger-move,
.stagger-enter-active,
.stagger-leave-active {
  // transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  transition: all 0.25s ease-in-out;
}
.stagger-enter-from,
.stagger-leave-to {
  opacity: 0;
  // transform: translateX(-2rem);
  transform: scale(0);
}
.stagger-leave-active {
  position: absolute;
}
</style>
