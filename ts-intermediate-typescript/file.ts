type Some = keyof Date;

type SoneAndString = Some & string;

interface ErrorHandling {
  success: boolean;
  error?: { message: string };
}

interface ArtworksData {
  artworks: { title: string }[];
}

interface ArtistsData {
  artists: { name: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;
type ArtistsResponse = ArtistsData & ErrorHandling;

type SomeOther = ArtistsResponse & symbol;

const some: SomeOther = {} as SomeOther;

const handleArtistsResponse = (response: ArtistsResponse) => {
  if (response.error) {
    console.error(response.error.message);
    return;
  }

  console.log(response.artists);
};

async function main() {
  const res = await Promise.all([
    fetch("someUrl"),
    Promise.resolve("Some result"),
  ]);

  type Res = typeof res;
}
