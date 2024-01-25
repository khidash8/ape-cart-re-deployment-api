module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  "netlify-deployments": {
    enabled: true,
    accessToken: "nfp_TicpLP6VEZjYRjMyM2SPvBtbE2Bb9rvf8611",
  },
  // ...
});
