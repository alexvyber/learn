import { render as rawRender, screen } from "test/utilities"
import { PackingList } from "."
import { createStore } from "./store"
import { Provider } from "react-redux"

const render = (children: React.ReactNode) => rawRender(<Provider store={createStore()}>{children}</Provider>)

it("renders the Packing List application", () => {
  render(<PackingList />)
})

it("has the correct title", async () => {
  render(<PackingList />)
  screen.getByText("Packing List")
})

it("has an input field for a new item", () => {
  render(<PackingList />)
  screen.getByLabelText("New Item Name")
})

it('has a "Add New Item" button that is disabled when the input is empty', () => {
  render(<PackingList />)
  const newItemInput = screen.getByLabelText("New Item Name")
  const addNewItemButton = screen.getByRole("button", { name: "Add New Item" })

  expect(newItemInput).toHaveValue("")
  expect(addNewItemButton).toBeDisabled()
})

it('enables the "Add New Item" button when there is text in the input field', async () => {
  const { user } = render(<PackingList />)
  const newItemInput = screen.getByLabelText("New Item Name")
  const addNewItemButton = screen.getByRole("button", { name: "Add New Item" })

  await user.type(newItemInput, "MackBook Pro")

  expect(addNewItemButton).toBeEnabled()
})

it('adds a new item to the unpacked item list when the clicking "Add New Item"', async () => {
  const { user } = render(<PackingList />)
  const newItemInput = screen.getByLabelText("New Item Name")
  const addNewItemButton = screen.getByRole("button", { name: "Add New Item" })

  await user.type(newItemInput, "Some Stuff")
  await user.click(addNewItemButton)

  expect(screen.getByLabelText("Some Stuff")).not.toBeChecked()
})
