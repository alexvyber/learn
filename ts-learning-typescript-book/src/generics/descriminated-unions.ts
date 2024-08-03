type Result<Data> = FailureResult | SuccessfulResult<Data>
interface FailureResult {
  error: Error
  succeeded: false
}
interface SuccessfulResult<Data> {
  data: Data
  succeeded: true
}
function handleResult(result: Result<string>) {
  if (result.succeeded) {
    // Type of result: SuccessfulResult<string>
    console.log(`We did it! ${result.data}`)
  } else {
    // Type of result: FailureResult
    console.error(`Awww... ${result.error}`)
  }

  //~~~~
  // Error: Property 'data' does not exist on type 'Result<string>'.
  //Property 'data' does not exist on type 'FailureResult'.
}
