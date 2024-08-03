import Config

config :music_db, :ecto_repos, [MusicDB.Repo]

config :music_db, MusicDB.Repo,
  username: "tail",
  password: "monafe",
  hostname: "localhost",
  database: "music_db_dev",
  # migration_lock: nil
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10

# import_config "#{config_env()}.exs"
