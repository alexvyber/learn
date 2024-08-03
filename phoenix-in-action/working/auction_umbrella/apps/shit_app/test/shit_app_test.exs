defmodule ShitAppTest do
  use ExUnit.Case
  doctest ShitApp

  test "greets the world" do
    assert ShitApp.hello() == :world
  end
end
