<!-- Home.vue -->

<!--Способ 1-->
<!--template>
    <Layout>
        <div>
            <h1>{{ title }}</h1>
        </div>
    </Layout>
</template>

<script setup>
import Layout from '@/shared/Layout.vue'
defineProps({ title: String })
</script --> 

<!--Способ 2-->
<!--template>
     <h1>{{ title }}</h1>
</template>

<script>
import Layout from '@/shared/Layout.vue';
export default {
      props:{
        title: String
    },
    layout: Layout
}
  
</script--> 


<!--Способ 3-->
<template>
     <Head>
        <title>{{ title }}</title>
     </Head>
     <h1>{{ title }}</h1>
</template>

<script>
import {Head} from '@inertiajs/vue3'
export default {
     components:{
        Head
     },
      props:{
        title: String
    }
}
  
</script> 