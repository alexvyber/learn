import "./App.css"
import {
  useLocalStorage,
  useMeasure,
  useScript,
  useTheme,
  useToggle,
  useWindowWidth,
} from "./hooks"
import { Counter } from "./components/counter"
import { Volume } from "./components/volume"
import { Rectangle } from "./components/rectangle"
import { AppProvider } from "./providers/app-provider"
import { Nav } from "./components/nav"
import { NavButton } from "./components/nav-button"
import { Cookie } from "./components/coockie"
import { Overflow } from "./components/overflow"

function App() {
  const width = useWindowWidth()
  const [storage, setStorage] = useLocalStorage("key", "value")
  console.log("🚀 ~ file: App.tsx:15 ~ App ~ storage:", storage)
  const volumeParams = {
    min: 0,
    max: 100,
  }

  const { isToggle, toggle } = useToggle(false)
  const [theme, setTheme] = useTheme()

  // const { loaded, error} = useScript("https://unpkg.com/solid-js@0.17.0-beta.3/dist/index.js")
  // console.log("🚀 ~ file: App.tsx:22 ~ App ~ loaded, error:", loaded, error)
  const [bounds, { ref }] = useMeasure<HTMLDivElement>()
  // console.log("🚀 ~ file: App.tsx:21 ~ App ~ bounds:", bounds)

  return (
    <AppProvider>
      <Cookie />
      <input
        placeholder="LOCALSTORAGE"
        value={storage}
        onChange={event => {
          setStorage(event.target.value)
        }}
      />

      <NavButton />

      <Nav />

      <div>Width: {width}</div>
      <div>Theme: {theme}</div>

      {theme === "light" ? (
        <button onClick={() => setTheme("dark")}>Dark</button>
      ) : (
        <button onClick={() => setTheme("light")}>Light</button>
      )}
      <div ref={ref} className="App">
        <div className="card">
          <button onClick={toggle}>Toggle</button>
          {isToggle && <h1>Shit! i'm toggled!</h1>}
        </div>

        <div style={{ margin: "20px auto" }}>
          <Counter />
        </div>

        <div style={{ margin: "20px auto" }}>
          <Volume {...volumeParams} />
        </div>

        <div style={{ margin: "20px auto" }}>
          <Rectangle />
        </div>

        <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
          <Overflow />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
          <Rectangle />
        </div>
      </div>
    </AppProvider>
  )
}

export default App
