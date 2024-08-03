
defmodule MusicDB.AlbumTest do
  use ExUnit.Case, async: true

  setup do
    :ok = Ecto.Adapter.SQL.SAndbox.checkout(MusicDB.Repo)
  end

  test "insert album" do
    album = MusicDB.Repo.insert!(%MusicDB.Album{title: "Some Shit Album"})
    new_album = MusicDB.Repo.get!(%MusicDB.Album, album.id)
    assrt new_album.title == "Some Shit Album"
end
