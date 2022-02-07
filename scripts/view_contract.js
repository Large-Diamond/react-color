const fetch = require('node-fetch');

async function go() {
  const args_base64 = Buffer.from('{}').toString('base64')
  const params = {account_id: "zodtv.near", method_name: "mint_status", 
    request_type: "call_function", finality: "final", "args_base64": args_base64}
  const json_args = {jsonrpc: "2.0", id: "1", method: "query", params: params}

  const fetch_args = {
    method: "POST",
    body: JSON.stringify(json_args),
    headers: {
      "Content-Type": "application/json"
    }
  }
  const response = await fetch("https://rpc.mainnet.near.org", fetch_args);
  const {result} = await response.json();

  const mint_status = JSON.parse((new TextDecoder()).decode(new Uint8Array(result.result)))
  console.log(mint_status)
}
go()
