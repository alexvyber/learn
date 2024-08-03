# emails = [
#  " hello@world.com" ,
#  " hola@world.com" ,
#  " nihao@world.com" ,
#  " konnichiwa@world.com" ,
# ]

import_file("~/elixir/scripts/custom_iex.exs")

sleep_timeout = 600_000

good_job = fn ->
  Process.sleep(sleep_timeout)
  {:ok, []}
end

bad_job = fn ->
  Process.sleep(sleep_timeout)
  :error
end

kaboom_job = fn ->
  Process.sleep(sleep_timeout)
  raise "KaBoom!"
end
