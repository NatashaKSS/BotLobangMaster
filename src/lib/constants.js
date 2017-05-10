module.exports = Object.freeze({
  FB_QUERY_PARAMS_URL: "/posts?fields=message,full_picture,link,attachments{url}",
  FB_QUERY_OPTIONS: {
    timeout: 3000,
    pool: { maxSockets: Infinity },
    headers: { connection: "keep-alive" }
  }
});
