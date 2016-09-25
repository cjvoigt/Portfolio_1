import PackageDescription

let package = Package(
    name: "Portfolio_1",
    dependencies: [
      .Package(url: "https://github.com/vapor/vapor.git", majorVersion: 1),
      .Package(url: "https://github.com/vapor/sqlite-provider.git", majorVersion: 1)
    ],
    exclude: [
        "Config",
        "Database",
        "Public",
        "Resources",
        "Tests",
    ]
)
