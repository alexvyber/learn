const { readdir, rename } = require("node:fs")

readdir(__dirname, (_, files) => {
  const fls = files.filter((item) => ![".git", "rename.js"].includes(item))

  fls.forEach((item) => {
    readdir(__dirname + "/" + item, (_err, files) => {
      console.log(files)
      files
        .filter((item) => !item.toLowerCase().includes("CHALLENGE".toLowerCase()))
        .forEach((file) => {
          const newName = file.toLowerCase().replaceAll(" ", "-").replace("-code.txt", "")
          const toRename = __dirname + "/" + item + "/" + `code.${langMap[newName]}`

          const fileName = __dirname + "/" + item + "/" + file

          console.log("🚀 ~ .forEach ~ fileName:", fileName)
          console.log("🚀 ~ .forEach ~ toRename:", toRename)

          rename(__dirname + "/" + item + "/" + file, toRename, (err) => {})
        })
    })
  })
})

const langMap = {
  "c++": "cpp",
  java: "java",
  javascript: "js",
  python: "py",
}
