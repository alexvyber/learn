defmodule Forms.Adress do
  import Ecto.Changeset
  use Ecto.Schema

  embedded_schema do
    field :street, :string
    field :city, :string
  end

  def changeset(adress, params) do
    cast(adress, params, [:street, :city])
  end
end
