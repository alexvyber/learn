defmodule FormsWeb.CatControllerTest do
  use FormsWeb.ConnCase

  import Forms.CatsFixtures

  @create_attrs %{age: 42, name: "some name"}
  @update_attrs %{age: 43, name: "some updated name"}
  @invalid_attrs %{age: nil, name: nil}

  describe "index" do
    test "lists all cats", %{conn: conn} do
      conn = get(conn, Routes.cat_path(conn, :index))
      assert html_response(conn, 200) =~ "Listing Cats"
    end
  end

  describe "new cat" do
    test "renders form", %{conn: conn} do
      conn = get(conn, Routes.cat_path(conn, :new))
      assert html_response(conn, 200) =~ "New Cat"
    end
  end

  describe "create cat" do
    test "redirects to show when data is valid", %{conn: conn} do
      conn = post(conn, Routes.cat_path(conn, :create), cat: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == Routes.cat_path(conn, :show, id)

      conn = get(conn, Routes.cat_path(conn, :show, id))
      assert html_response(conn, 200) =~ "Show Cat"
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.cat_path(conn, :create), cat: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Cat"
    end
  end

  describe "edit cat" do
    setup [:create_cat]

    test "renders form for editing chosen cat", %{conn: conn, cat: cat} do
      conn = get(conn, Routes.cat_path(conn, :edit, cat))
      assert html_response(conn, 200) =~ "Edit Cat"
    end
  end

  describe "update cat" do
    setup [:create_cat]

    test "redirects when data is valid", %{conn: conn, cat: cat} do
      conn = put(conn, Routes.cat_path(conn, :update, cat), cat: @update_attrs)
      assert redirected_to(conn) == Routes.cat_path(conn, :show, cat)

      conn = get(conn, Routes.cat_path(conn, :show, cat))
      assert html_response(conn, 200) =~ "some updated name"
    end

    test "renders errors when data is invalid", %{conn: conn, cat: cat} do
      conn = put(conn, Routes.cat_path(conn, :update, cat), cat: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Cat"
    end
  end

  describe "delete cat" do
    setup [:create_cat]

    test "deletes chosen cat", %{conn: conn, cat: cat} do
      conn = delete(conn, Routes.cat_path(conn, :delete, cat))
      assert redirected_to(conn) == Routes.cat_path(conn, :index)

      assert_error_sent 404, fn ->
        get(conn, Routes.cat_path(conn, :show, cat))
      end
    end
  end

  defp create_cat(_) do
    cat = cat_fixture()
    %{cat: cat}
  end
end
