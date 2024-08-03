defmodule Forms.CatsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `Forms.Cats` context.
  """

  @doc """
  Generate a cat.
  """
  def cat_fixture(attrs \\ %{}) do
    {:ok, cat} =
      attrs
      |> Enum.into(%{
        age: 42,
        name: "some name"
      })
      |> Forms.Cats.create_cat()

    cat
  end
end
