defmodule MusicDB.Repo.Migrations.AddArtistsTable do
  use Ecto.Migration

  def change do
    create table(:artists) do
      add(:name, :string, null: false)
      add(:birth_date, :date, null: false, default: fragment("now()"))
      add(:death_date, :date, null: true)

      timestamps(null: true)
    end

    create(index(:artists, :name))
  end
end
