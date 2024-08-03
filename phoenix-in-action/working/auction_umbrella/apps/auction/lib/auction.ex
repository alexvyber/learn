defmodule Auction do
  @moduledoc """
  Documentation for `Auction`.
  """
  alias Auction.FakeRepo

  @repo FakeRepo

  alias Auction.{FakeRepo, Item}

  @doc """
  Hello world.

  ## Examples

      iex> Auction.hello()
      :world

  """
  def hello do
    :world
  end

  def list_items do
    @repo.all(Item)
  end

  def get_item(id) do
    @repo.get!(Item, id)
  end

  def get_item_by(attrs) do
    @repo.get_by(Item, attrs)
  end
end
