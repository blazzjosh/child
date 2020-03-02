<script context="module">
  import Select from "svelte-select";
  export async function preload() {
    let res = await this.fetch(`controllers/Search`);
    const childList = await res.json();
    console.log(childList);
    return { childList };
  }
</script>
