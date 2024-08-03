class GradeAnnouncer {
  message: string
  constructor(grade: number) {
    this.message = grade <= 65 ? "Maybe next time..." : "You pass!!!!"
  }
}
class PassingAnnouncer extends GradeAnnouncer {
  constructor() {
    super(100)
  }
}
class FailingAnnouncer extends GradeAnnouncer {
  constructor() {}
}

class Some extends GradeAnnouncer {}

const some = new Some(Math.random() * 100)
console.log(some.message)
