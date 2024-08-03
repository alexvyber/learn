import Config

config :music_db, MusicDB.Repo,
  username: "tail",
  password: "monafe",
  hostname: "localhost",
  database: "musci_db_dev",
  stacktrace: true,
  show_sensitive_data_on_connection_error: true,
  pool_size: 10
