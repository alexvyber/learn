declare let config: AppConfig
type UnitSystem = "metric" | "imperial"

const unitSystem = config.unitSystem ?? "imperial"

interface InputAppConfig {
  darkMode: boolean
  // ... other settings ...
  /**
   * default is imperial
   */
  unitSystem?: UnitSystem
}
interface AppConfig extends InputAppConfig {
  unitSystem: UnitSystem // required
}

function normalizeAppConfig(inputConfig: InputAppConfig): AppConfig {
  return {
    ...inputConfig,
    unitSystem: inputConfig.unitSystem ?? "imperial",
  }
}
