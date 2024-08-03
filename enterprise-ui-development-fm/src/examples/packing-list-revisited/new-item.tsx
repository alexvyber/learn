import { useState } from "react"
import { add } from "./store/items-slice"
import { useDispatch } from "./store/hooks"

const NewItem = () => {
  const [newItemName, setNewItemName] = useState("")
  const dispatch = useDispatch()

  return (
    <form
      id="new-item"
      onSubmit={(e) => {
        e.preventDefault()
        dispatch(add({ name: newItemName }))
        setNewItemName("")
      }}
    >
      <label htmlFor="new-item-name" className="font-semibold">
        New Item Name
      </label>
      <div className="my-2 flex">
        <input
          id="new-item-name"
          className="w-full"
          type="search"
          placeholder="New Item"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button
          id="new-item-submit"
          className="bg-primary-300 whitespace-nowrap border-l-0"
          disabled={!newItemName}
          aria-label={"Add New Item"}
          type="submit"
        >
          ➕ Add New Item
        </button>
      </div>
    </form>
  )
}

export default NewItem
