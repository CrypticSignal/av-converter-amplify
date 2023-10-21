/** @type {import('next').NextConfig} */

module.exports = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "require-corp",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Access-Control-Allow-Origin",
            value: "*",
          },
          {
            key: "Test-Header",
            value: "Next-Config",
          },
          {
            key: "NextConfig",
            value: "abc",
          },
        ],
      },
    ];
  },
};
