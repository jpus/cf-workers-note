addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  if (url.pathname == "/" && url.search == "") {
    url.href="https://c329k3-8080.csb.app"
    let request = new Request(url, event.request);
    event.respondWith(fetch(request));
  }
})