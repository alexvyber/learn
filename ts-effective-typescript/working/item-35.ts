type RecordingType = "studio" | "live"

interface Album {
  artist: string
  title: string
  releaseDate: Date
  recordingType: RecordingType
}

function pluck<T extends Record<string, unknown>>(records: T[], key: keyof T) {
  return records.map((r) => r[key])
}

pluck([{ some: "say" }, { other: "dont" }], "some")

function pluc2<T, K extends keyof T>(records: T[], key: K): T[K][] {
  return records.map((r) => r[key])
}

const albums: Album[] = []

pluck([{ some: "say" }, { other: "dont" }], "some")

pluc2(albums, "releaseDate")
