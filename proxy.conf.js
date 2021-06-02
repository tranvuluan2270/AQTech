const PROXY_CONFIG = [
  {
    context: ["/aq/lichthisv", "/aq/tkbtuansv", "/aq/diemhksv"],
    target: "http://edusoft.net.vn:8080/TestAPI",
    secure: false,
    changeOrigin: true,
    logLevel: "debug",
    headers: { host: "localhost" },
    timeout: 60000,
    cookieDomainRewrite: {
      localhost: "localhost",
    },
  },
];
module.exports = PROXY_CONFIG;
