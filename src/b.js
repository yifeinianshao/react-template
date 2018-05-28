async function abc() {
  const data = await setTimeout(() => {
    console.log(123)
  }, 100)
}

export default abc
