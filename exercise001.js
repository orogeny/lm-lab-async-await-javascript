const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// Your solution(s) to exercise001 here!

// promise.then((resp) => console.log("Yay! Promise resolved with response: " + resp))
// .catch((err) => console.log("Boo. Promise rejected with response: " + err));

const getPromiseResponse = async () => {
  try {
    const resp = await promise;

    console.log("Yay! Promise resolved with response: " + resp);
  } catch (err) {
    console.log("Boo. Promise rejected with response: " + err);
  }
};

getPromiseResponse();
