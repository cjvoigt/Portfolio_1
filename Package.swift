import PackageDescription

let package = Package(
    name: "Portfolio_1",
    dependencies: [
        .Package(url: "https://github.com/vapor/vapor.git", majorVersion: 0, minor: 18)
    ],
    exclude: [
        "Config",
        "Database",
        "Public",
        "Resources",
        "Tests",
    ]
)
