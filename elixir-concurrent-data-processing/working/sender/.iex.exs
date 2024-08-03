# emails = [
#  " hello@world.com" ,
#  " hola@world.com" ,
#  " nihao@world.com" ,
#  " konnichiwa@world.com" ,
# ]

import_file "~/elixir/scripts/custom_iex.exs"

Faker.start()

emails = Enum.reduce(1..33, [], fn _x, acc -> [ Faker.Internet.email() | acc ] end)
emails = [ "katzen@kotik.cat" | emails ]
