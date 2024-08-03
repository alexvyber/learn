defmodule FormsWeb.CatController do
  use FormsWeb, :controller

  alias Forms.Cats
  alias Forms.Cats.Cat

  def index(conn, _params) do
    cats = Cats.list_cats()
    render(conn, "index.html", cats: cats)
  end

  def new(conn, _params) do
    changeset = Cats.change_cat(%Cat{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"cat" => cat_params}) do
    case Cats.create_cat(cat_params) do
      {:ok, cat} ->
        conn
        |> put_flash(:info, "Cat created successfully.")
        |> redirect(to: Routes.cat_path(conn, :show, cat))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    cat = Cats.get_cat!(id)
    render(conn, "show.html", cat: cat)
  end

  def edit(conn, %{"id" => id}) do
    cat = Cats.get_cat!(id)
    changeset = Cats.change_cat(cat)
    render(conn, "edit.html", cat: cat, changeset: changeset)
  end

  def update(conn, %{"id" => id, "cat" => cat_params}) do
    cat = Cats.get_cat!(id)

    case Cats.update_cat(cat, cat_params) do
      {:ok, cat} ->
        conn
        |> put_flash(:info, "Cat updated successfully.")
        |> redirect(to: Routes.cat_path(conn, :show, cat))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", cat: cat, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    cat = Cats.get_cat!(id)
    {:ok, _cat} = Cats.delete_cat(cat)

    conn
    |> put_flash(:info, "Cat deleted successfully.")
    |> redirect(to: Routes.cat_path(conn, :index))
  end
end
