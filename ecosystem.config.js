module.exports = {
  "apps": [
    {
      "name": "Platforma Frontend",
      "script": "./node_modules/next/dist/bin/next",
      "env_prod": {
        "SECRET": "l__adsfjlkajsd!fh1",
        "AUTH_SUCCESS_CALLBACK_URL": "https://platforma.is/",
        "BACKEND_HOSTNAME": "https://platforma.is/backend-api",
        "BACKEND_PORT": 3002,
        "GITHUB_ID": "7cd2b1344c18a034bfc3",
        "GITHUB_SECRET": "6066f2a8a25fce03d5d12690a1cb8a62d6444de3",
        "VK_ID": 51882834,
        "VK_CLIENT_ID": "QkyiNBpoXxn1OEk4uF6G",
        "VK_CLIENT_SECRET": "64c76a1064c76a1064c76a100367d0c142664c764c76a10013d8b31cf610c7fc1a0d6d1",
        "YANDEX_CLIENT_ID": "1433b1a875cc47c2b9d78e93cb55791e",
        "YANDEX_CLIENT_SECRET": "f8969910ea04425980c01c2b84bb7b9e",
        "DATABASE_URL": "postgres://postgres:pgpwd@platforma.is:5438/postgres?connect_timeout=300",
        "NEXT_PUBLIC_API": "https://platforma.is/backend-api",
        "NEXTAUTH_URL": "https://platforma.is",
      },
      "env_test": {
        "SECRET": "l__adsfjlkajsd!fh1",
        "AUTH_SUCCESS_CALLBACK_URL": "https://test.platforma.is/",
        "BACKEND_HOSTNAME": "https://test.platforma.is/backend-api",
        "BACKEND_PORT": 5002,
        "GITHUB_ID": "7cd2b1344c18a034bfc3",
        "GITHUB_SECRET": "6066f2a8a25fce03d5d12690a1cb8a62d6444de3",
        "VK_ID": 51882834,
        "VK_CLIENT_ID": "QkyiNBpoXxn1OEk4uF6G",
        "VK_CLIENT_SECRET": "64c76a1064c76a1064c76a100367d0c142664c764c76a10013d8b31cf610c7fc1a0d6d1",
        "YANDEX_CLIENT_ID": "1433b1a875cc47c2b9d78e93cb55791e",
        "YANDEX_CLIENT_SECRET": "f8969910ea04425980c01c2b84bb7b9e",
        "DATABASE_URL": "postgres://postgres:pgpwd@platforma.is:5438/postgres?connect_timeout=300",
        "NEXT_PUBLIC_API": "https://test.platforma.is/backend-api",
        "NEXTAUTH_URL": "https://test.platforma.is",
      },
      "args": "-p 3000",
      "exec_mode": "cluster",
      "instances": "max"
    }
  ]
}