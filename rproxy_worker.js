addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)

  // 此选项适合目标主机域名使用证书443端口的平台
  url.hostname = "xxxxxx.xxxxxx.com"
  
  // 此选项适合目标主机不带证书及使用非标端口的平台.cloudflare优选只能使用支持http的80, 8080, 8880, 2052, 2082, 2086, 2095端口
  // 目标主机不带证书及使用非标端口而想套用cf的证书，不应创建此worker.而是cf托管的域名创建目标主机的A或AAAA或CNAME记录，再创建规则origin-rules端口回源
  // url.host = "xxxxxx.xxxxxx.com:13579"
  
  // 发起https请求以https代理，发起http请求以http代理
  url.protocol = request.url.startsWith('https') ? 'https:' : 'http:'

  // 创建一个新的请求，保留原始请求的方法和头信息
  const newRequest = new Request(url, request)

  // 通过 fetch 请求目标地址并返回响应
  return fetch(newRequest)
}
