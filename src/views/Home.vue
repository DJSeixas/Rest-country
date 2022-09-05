<template>
<div>
  <TheHeader />
  
  <TheSearch />

  <TheTable />
</div>
</template>

<script>
// @ is an alias to /src
import TheHeader from '@/components/TheHeader.vue'
import TheSearch from '@/components/TheSearch.vue'
import TheTable from '@/components/TheTable.vue'

export default {
  components: {
    TheHeader,
    TheSearch,
    TheTable
}
}
</script>
