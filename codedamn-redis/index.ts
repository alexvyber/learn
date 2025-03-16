import Redis from "ioredis"

const redis = new Redis()

Bun.serve({
  async fetch(request) {
    const url = new URL(request.url)

    if (url.pathname === "/repo") {
      const body = await request.json()

      const maybeCachedRepo = await redis.get(composeRepoKey(body.repo))

      if (maybeCachedRepo) {
        const repo = JSON.parse(maybeCachedRepo)
        return Response.json({ stars: repo.stargazers_count })
      }

      try {
        const res = await fetch(`https://api.github.com/repos/${body.repo}`)

        if (res.ok) {
          const data = await res.json()
          console.log("🚀 ~ fetch ~ data:", data)

        

         const result  =  await redis.setnx(composeRepoKey(body.repo), JSON.stringify(data))
         console.log("🚀 ~ fetch ~ result:", result)

          return  Response.json({
            stars: data.stargazers_count,
          })
          
        }
      } catch (error) {
        return Response.json({ error })
      }

    }

    if (url.pathname.endsWith("/") || url.pathname.endsWith("/index.html")) {
      return new Response(Bun.file(import.meta.dir + "/index.html"))
    }

    return Response.json({ error: true }, { status: 500 })
  },
  port: 3030,
})

function composeRepoKey(repo: string): string {
  return `repo:${repo}`
}
