<script context="module">
  export async function preload() {
    let res = await this.fetch(`controllers/Search`);
    const childList = await res.json();
    return { childList };
  }
</script>

<script>
  import Select from "svelte-select";
  export let childList;
  export let selectedValue = [];

  let childcount = 0;

  let items = [];

  for (let i = 0; i < childList.length; i++) {
    items.push({
      value: childList[i].id,
      label: childList[i].firstName + " " + childList[i].lastName,
      pid: childList[i].parentid
    });
  }

  function printout() {
    if (selectedValue) {
      console.log(JSON.stringify(selectedValue));
    } else {
      alert("select a Name");
    }
  }

  async function genPDF() {
    let names = [];
    for (let i = 0; i < selectedValue.length; i++) {
      names.push({
        name: selectedValue[i].label
      });
    }

    fetch("controllers/printpdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ names })
    });
  }

  async function addAttend() {
    let record = [];
    for (let i = 0; i < selectedValue.length; i++) {
      record.push({
        parentid: selectedValue[i].pid,
        childId: selectedValue[i].value
      });
    }

    fetch("controllers/Attendance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ record })
    }).then(record => {
      console.log(record);
    });
  }
</script>

<h3>Kids in Service Today:{childcount}</h3>
<form
  action="/printTag"
  target="_blank"
  on:submit={genPDF}
  on:submit={addAttend}>

  <Select
    {items}
    isCreatable={true}
    isSearchable={true}
    isMulti={true}
    bind:selectedValue
    isVirtualList={true} />

  {#if selectedValue}
    <button type="submit">Register</button>
  {/if}

</form>

{#if selectedValue}
  <ul>
    {#each selectedValue as child}
      {child.label} {child.pid}
      <br />
    {/each}
  </ul>
{/if}
