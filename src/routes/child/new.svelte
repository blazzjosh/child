<script>
  async function handleSubmit(event) {
    let child = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      parentid: event.target.parentid.value
    };

    fetch("controllers/Children", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ child })
    });
  }
</script>

<h1>Register your Children</h1>
<form action="children" on:submit|preventDefault={handleSubmit}>
  <label for="firstName">First Name</label>
  <input required type="text" id="firstName" />

  <label for="lastName">Last Name</label>
  <input required type="text" id="lastName" />

  <label for="parentid">Parent Id</label>
  <input required type="number" id="parentid" />

  <button type="submit">Save Child</button>
</form>
