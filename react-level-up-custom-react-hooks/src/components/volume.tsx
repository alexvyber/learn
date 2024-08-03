import { useRange } from "../hooks"

interface Props {
  min: number
  max: number
}

export const Volume = ({ min, max }: Props) => {
  const [volume, volumeControls] = useRange({ min, max })
  return (
    <div>
      <label htmlFor="volume">
        <div> Volume: {volume}</div>
        <input
          type="range"
          id="volume"
          name="volume"
          min={min}
          max={max}
          value={volume}
          onChange={e => volumeControls.set(parseInt(e.target.value))}
        />
      </label>
      <div>
        <button onClick={volumeControls.inc}>+</button>
        <button onClick={volumeControls.dec}>-</button>
        <button onClick={volumeControls.reset}>reset</button>
      </div>
    </div>
  )
}
