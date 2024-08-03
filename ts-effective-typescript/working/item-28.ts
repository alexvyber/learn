type Seed =
  | {
      some: "some"
      more: "more"
    }
  | {
      some: "some"
      other: "other"
    }

export interface SeedAPI {
  "/seeds": Seed[]
  "/seed/apple": Seed
  "/seed/strawberry": Seed // ...
}
declare function fetchAPI<T>(url: keyof T): Promise<T[keyof T]>

const berry = await fetchAPI<SeedAPI>("/seed/strawberry") // OK, returns Seed

declare class ApiFetcher<API> {
  fetch<Path extends keyof API>(path: Path): Promise<API[Path]>
}

const fetcher = new ApiFetcher<SeedAPI>()

const berry1 = await fetcher.fetch("/seed/strawberry") // OK

fetcher.fetch("/seed/chicken")

const seed: Seed = await fetcher.fetch("/seeds")

declare function fetchAPICurry<API>(): <Path extends keyof API>(path: Path) => Promise<API[Path]>

const berry2 = await fetchAPICurry<SeedAPI>()("/seed/strawberry") // OK

const fetchSeedAPI = fetchAPICurry<SeedAPI>()
const berry3 = await fetchSeedAPI("/seed/strawberry")

declare function apiFetcher<API>(): {
  fetch<Path extends keyof API>(path: Path): Promise<API[Path]>
}

const fetcher2 = apiFetcher<SeedAPI>()
fetcher2.fetch("/seed/strawberry") // ok
