defmodule Forms.Repo.Migrations.CreateCats do
  use Ecto.Migration

  def change do
    create table(:cats) do
      add :name, :string
      add :age, :integer

      timestamps()
    end
  end
end
