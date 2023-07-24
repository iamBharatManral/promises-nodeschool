const resolvedPromise = Promise.resolve("Just Got Resolved!")

const rejectedPromise = Promise.reject("Just Got Rejected!")

resolvedPromise.then(console.log)
rejectedPromise.catch(console.log)
