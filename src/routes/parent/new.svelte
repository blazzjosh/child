<script>
  async function handleSubmit(event) {
    let parent = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      address: event.target.address.value,
      phone: event.target.phone.value
    };

    fetch("controllers/Parents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ parent })
    }).then(user => {
      console.log(parent);
    });
  }
</script>

<h1>Register Parent</h1>
<form action="parent" on:submit|preventDefault={handleSubmit}>
  <label for="firstName">First Name</label>
  <input required type="text" id="firstName" />

  <label for="lastName">Last Name</label>
  <input required type="text" id="lastName" />

  <label for="address">Home Address</label>
  <input required type="text" id="address" />

  <label for="phone">Phone</label>
  <input required type="number" id="phone" />

  <button type="submit">Save Parent</button>
</form>
