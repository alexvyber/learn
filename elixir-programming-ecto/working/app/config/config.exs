import Config

config :app, App.Repo,
  database: "app_dev",
  username: "tail",
  password: "monafe",
  hostname: "localhost"

config :app, :ecto_repos, [App.Repo]
