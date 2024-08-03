declare function fetchURL(url: string, callback: (response: string) => void): void

const url1 = "some str"
const url2 = "some str"
const url3 = "some str"
fetchURL(url1, function (response1) {
  fetchURL(url2, function (response2) {
    fetchURL(url3, function (response3) {
      // ...
      console.log(1)
    })
    console.log(2)
  })
  console.log(3)
})
console.log(4)

const page1Promise = fetch(url1)
page1Promise
  .then((response1) => {
    return fetch(url2)
  })
  .then((response2) => {
    return fetch(url3)
  })
  .then((response3) => {})
  .catch((error) => {})

async function fetchPages() {
  const response1 = await fetch(url1)
  const response2 = await fetch(url2)
  const response3 = await fetch(url3) // ...
}

async function fetchPages1() {
  try {
    const response1 = await fetch(url1)
    const response2 = await fetch(url2)
    const response3 = await fetch(url3) // ...
  } catch (e) {
    // ...
  }
}

async function fetchAllPages() {
  const [response1, response2, response3] = await Promise.all([fetch(url1), fetch(url2), fetch(url3)])
}

function fetchPagesWithCallbacks() {
  let numDone = 0

  const responses: string[] = []

  const done = () => {
    const [response1, response2, response3] = responses
  }

  const urls = [url1, url2, url3]

  urls.forEach((url, i) => {
    fetchURL(url, (r) => {
      responses[i] = url

      numDone++

      if (numDone === urls.length) done()
    })
  })
}

function timeout(timeoutMs: number): Promise<never> {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("timeout"), timeoutMs)
  })
}

async function fetchWithTimeout(url: string, timeoutMs: number) {
  return Promise.race([fetch(url), timeout(timeoutMs)])
}

const getNumber = () => Promise.resolve(42)

const _cache: { [url: string]: string } = {}

function fetchWithCache(url: string, callback: (text: string) => void) {
  if (url in _cache) {
    callback(_cache[url])
  } else {
    fetchURL(url, (text) => {
      _cache[url] = text
      callback(text)
    })
  }
}

let requestStatus: "loading" | "success" | "error"

function getUser(userId: string) {
  fetchWithCache(`/user/${userId}`, (profile) => {
    requestStatus = "success"
  })

  requestStatus = "loading"
}

const _cache1: { [url: string]: string } = {}

async function fetchWithCache1(url: string) {
  if (url in _cache) {
    return _cache[url]
  }
  const response = await fetch(url)
  const text = await response.text()
  _cache[url] = text
  return text
}

let requestStatus1: "loading" | "success" | "error"

async function getUser1(userId: string) {
  requestStatus = "loading"
  const profile = await fetchWithCache1(`/user/${userId}`)
  requestStatus = "success"
}
