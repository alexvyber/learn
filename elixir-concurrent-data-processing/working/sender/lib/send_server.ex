defmodule SendServer do
  use GenServer

  def init(args) do
    IO.puts("Args are #{inspect(args)}")
    max_retries = Keyword.get(args, :max_retries, 5)
    state = %{emails: [], max_retries: max_retries}
    # state = %{}
    Process.send_after(self(), :retry, 5000)
    {:ok, state}
  end

  def handle_call(:get_state, _from, state) do
    {:reply, state, state}
  end

  def handle_cast({:send, email}, state) do
    # :ok = IO.puts "Send Shit to #{email}"
    status =
      case Sender.send_email(email) do
        {:ok, "email_sent"} -> "sent"
        :error -> "failed"
      end

    emails = [%{email: email, status: status, retries: 0}] ++ state.emails
    {:noreply, %{state | emails: emails}}
  end

  def handle_info(:retry, state) do
    {failed, done} =
      Enum.split_with(state.emails, fn item ->
        item.status == "failed" && item.retries < state.max_retries
      end)

    retried =
      Enum.map(failed, fn item ->
        IO.puts("Retrying #{item.email}")

        new_status =
          case Sender.send_email(item.email) do
            {:ok, "email_sent"} -> "sent"
            :error -> "failed"
          end

        %{email: item.email, status: new_status, retries: item.retries + 1}
      end)

    Process.send_after(self(), :retry, 5000)
    {:noreply, %{state | emails: retried ++ done}}
  end

  def terminate(reason, _state) do
    IO.puts(" Terminating with reason  #{reason} ")
  end
end