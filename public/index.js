init();

async function init() {
  console.log("init page");
  if (location.search.split("=")[1] === undefined) {
    console.log("one");
    const workout = await API.getLastWorkout();
    if (workout) {
      console.log("two");
      location.search = "?id=" + workout._id;
    } else {
      console.log("three");
      document.querySelector("#continue-btn").classList.add("d-none");
    }
  }
}
