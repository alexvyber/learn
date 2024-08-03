import Config

config :music_db, MusicDB.Repo,
  # adapter: Ecto.Adapters.Postgres,
  username: "tail",
  password: "monafe",
  hostname: "localhost",
  database: "music_db_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  # pool_size: 10
