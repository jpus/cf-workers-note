addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // 代理所有请求到目标域名 xxxxxx改回自己的
  url.hostname = "xxxxxx.xxxxxx.com"
  
  // 使用 HTTPS 代理
  url.protocol = "https:"

  const newRequest = new Request(url, request)

  // 通过 fetch 请求目标地址并返回响应
  return fetch(newRequest)
}
