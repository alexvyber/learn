// -- 7. Typing a Data Layer

import { Book } from "./book";
import { Movie } from "./movie";
import { Song } from "./song";

interface EntityMap {
  book: Book;
  movie: Movie;
  song: Song;
}

//

class Store {
  get<Kind extends keyof EntityMap>(kind: Kind, id: string): EntityMap[Kind] {
    return "some";
  }

  getAll<Kind extends keyof EntityMap>(kind: Kind): EntityMap[Kind][] {
    return "some";
  }

  create<Kind extends keyof EntityMap>(
    kind: Kind,
    toCreate: EntityMap[Kind]
  ): void {
    console.log(kind, toCreate);
  }

  update<Kind extends keyof EntityMap>(
    kind: Kind,
    id: string,
    props: Partial<EntityMap[Kind]>
  ): EntityMap[Kind] {
    return "some";
  }
}

//

const store = new Store();
store.get("book", "some");
store.get("movie", "asdf");

store.getAll("movie");
store.getAll("song");

store.create("movie", { director: "Some" });
store.create("song", { composer: "Another Guy" });

store.update("book", "some", { author: "New Author", bestSeller: false });
store.update("movie", "some", { director: "New Director" });
