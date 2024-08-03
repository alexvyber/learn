function extent(nums: Iterable<number>) {
  let min, max

  for (const num of nums) {
    if (!min) {
      min = num
      max = num
    } else {
      min = Math.min(min, num)
      max = Math.max(max, num)
    }
  }

  return [min, max]
}

function extent2(nums: Iterable<number>): [number, number] | null {
  let minMax: [number, number] | null = null

  for (const num of nums) {
    if (!minMax) {
      minMax = [num, num]
    } else {
      const [oldMin, oldMax] = minMax
      minMax = [Math.min(num, oldMin), Math.max(num, oldMax)]
    }
  }
  return minMax
}

// class UserPosts {
//   user: UserInfo | null
//   posts: Post[] | null
//   constructor() {
//     this.user = null
//     this.posts = null
//   }
//   async init(userId: string) {
//     return Promise.all([
//       async () => (this.user = await fetchUser(userId)),
//       async () => (this.posts = await fetchPostsForUser(userId)),
//     ])
//   }
//   getUserName() {
//     // ...?
//   }
// }

class UserPosts {
  user: UserInfo
  posts: Post[]

  constructor(user: UserInfo, posts: Post[]) {
    this.user = user
    this.posts = posts
  }

  static async init(userId: string): Promise<UserPosts> {
    const [user, posts] = await Promise.all([fetchUser(userId), fetchPostsForUser(userId)])
    return new UserPosts(user, posts)
  }

  getUserName() {
    return this.user.name
  }
}
