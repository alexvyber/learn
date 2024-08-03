defmodule Forms.Cats.Cat do
  use Ecto.Schema
  import Ecto.Changeset
  alias Forms.Adress

  schema "cats" do
    field :age, :integer
    field :name, :string

    embeds_one :agress, Adress

    timestamps()
  end

  @doc false
  def changeset(cat, attrs) do
    cat
    |> cast(attrs, [:name, :age])
    |> validate_required([:name, :age])
    |> cast_embed(:adress)
    |> validate_number(:age, greater_then: 0, message: "You're not born yet")
  end
end
