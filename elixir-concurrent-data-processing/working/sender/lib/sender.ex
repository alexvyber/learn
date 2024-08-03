defmodule Sender do
  @moduledoc """
  Documentation for Sender.
  """

  def send_email("katzen@kotik.cat" = email), do: :error

  def send_email(email) do
    Process.sleep(1500)
    IO.puts("Email to #{email} sent")
    {:ok, "email_sent"}
  end

  def notify_all(emails) do
    Enum.each(emails, &send_email/1)
  end

  def notify_all_two(emails) do
    emails
    |> Enum.map(fn email ->
      Task.async(fn ->
        send_email(email)
      end)
    end)
    |> Enum.map(&Task.await/1)
  end

  def notify_all_three(emails) do
    emails
    |> Task.async_stream(&send_email/1)
    |> Enum.to_list()
  end

  def notify_all_four(emails) do
    Sender.EmailTaskSupervisor
    |> Task.Supervisor.async_stream_nolink(emails, &send_email/1)
    |> Enum.to_list()
  end
end
