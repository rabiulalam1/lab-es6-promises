// This will print in the wrong order
// we added it for you to test to make sure data is loaded
// 🚨🚨🚨 comment out the next 3 lines when you start working on the code
for (let i = 0; i < mashPotatoes.length; i++) {
  //addFood(steak[i], '#steak');
  console.log(mashPotatoes[i]);
}

// Iteration 1 using callbacks
addFood(steak[0], "#steak", () => {
  // ... your code here
  addFood(steak[1], "#steak", () => {
    // ... your code here
    addFood(steak[2], "#steak", () => {
      // ... your code here
      addFood(steak[3], "#steak", () => {
        // ... your code here
        addFood(steak[4], "#steak", () => {
          // ... your code here
          addFood(steak[5], "#steak", () => {
            // ... your code here
            addFood(steak[6], "#steak", () => {
              // ... your code here
              addFood(steak[7], "#steak", () => {
                document.querySelector(
                  "#table"
                ).innerHTML += `<img src="public/images/steak.jpg" />`;

                // ... your code here
              });
            });
          });
        });
      });
    });
  });
});

// Iteration 2 using `.then()`
addFood(mashPotatoes[0], "#mashPotatoes").then(() => {
  // ... your code here
  addFood(mashPotatoes[1], "#mashPotatoes").then(() => {
    // ... your code here
    addFood(mashPotatoes[2], "#mashPotatoes").then(() => {
      // ... your code here
      addFood(mashPotatoes[3], "#mashPotatoes").then(() => {
        // ... your code here
        addFood(mashPotatoes[4], "#mashPotatoes").then(() => {
          document.querySelector(
            "#table"
          ).innerHTML += `<img src="public/images/mashPotatoes.jpg" />`;
        });
      });
    });
  });
});

// mashPotatoes.map((eachStep) => {
//   addFood(eachStep, "#mashPotatoes");
// });

// Iteration 3 using async and await

async function makeFood(step, id) {
  // await step.map((eachStep) => {
  //   addFood(eachStep, "#brusselSprouts");
  //   console.log(eachStep);
  // });
  for (let steps of step) {
    await addFood(steps, id);
  }
  document.querySelector(
    "#table"
  ).innerHTML += `<img src="public/images/brusselSprouts.jpg" />`;
}
makeFood(brusselSprouts, "#brusselSprouts");
