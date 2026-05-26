// Minimal gRPC-Web unary call for an empty request message.
// It sends a 5-byte body (0x00 + 4-byte big-endian length=0).
// This works for ASP.NET Core gRPC-Web when enabled.
export async function callGrpcGetPrice(baseUrl) {
  const endpoint = `${baseUrl.replace(/\/$/, '')}/energyprice.PriceService/GetPrice`
  const body = new Uint8Array([0, 0, 0, 0, 0])
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/grpc-web+proto',
      'X-Grpc-Web': '1',
      'Accept': 'application/grpc-web+proto'
    },
    body
  })
  // Ensure stream is consumed
  try {
    await response.arrayBuffer()
  } catch {}
}


