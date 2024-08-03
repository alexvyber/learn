const rawData = `["grace", "frankie"]`
// Type: any
JSON.parse(rawData)
// Type: string[]
JSON.parse(rawData) as string[]
// Type: [string, string]
JSON.parse(rawData) as [string, string]
// Type: ["grace", "frankie"]
JSON.parse(rawData) as ["grace", "frankie"]
