<template>
  <div>
    <el-select
      v-model="locale"
      placeholder=""
      size="large"
      @change="onChangeLanguage"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup>
// https://v8.i18n.nuxtjs.org/guide/lang-switcher
const { locale, locales, setLocale } = useI18n();

// const availableLocales = computed(() => {
//   return (locales.value).filter(i => i.code !== locale.value)
// });

console.log(locale.value, locales.value);

const options = [
  { label: "en-US", value: "en-US" },
  { label: "zh-CN", value: "zh-CN" },
];

const onChangeLanguage = () => {
  console.log(locale.value);
  setLocale(locale.value);
};
</script>

<style scoped lang="scss">
div {
  display: flex;
  // justify-content: end;
}
</style>
