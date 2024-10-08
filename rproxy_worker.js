addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // 使用 hostname 设置域名，此选项适合目标主机使用443端口的平台
  url.hostname = "xxxxxx.xxxxxx.com"
  
  // 使用 host 等于域名+端口，此选项适合目标主机使用非标端口的平台
  // url.host = "xxxxxx.xxxxxx.com:8080"
  
  // 发起https请求以https代理，发起http请求以http代理
  url.protocol = request.url.startsWith('https') ? 'https:' : 'http:'

  // 创建一个新的请求，保留原始请求的方法和头信息
  const newRequest = new Request(url, request)

  // 通过 fetch 请求目标地址并返回响应
  return fetch(newRequest)
}
