async function* getItems() {
  yield `Item t=${process.hrtime()}`
}

(async function () {
  for await (let item of getItems()) {
    console.log(item)
  }
})()
