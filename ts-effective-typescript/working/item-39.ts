interface StudentTable {
  first_name: string
  last_name: string
  birth_date: string
  some_shit: {
    other_type: string
  }
}

interface Student {
  firstName: string
  lastName: string
  birthDate: string
}

type StudentCamelized = ObjectToCamel<StudentTable>

type ObjectToCamel<T extends object> = {
  [Key in keyof T as Key extends string ? SnakeToCamel<Key> : never]: T[Key] extends object
    ? ObjectToCamel<T[Key]>
    : T[Key]
}
type SnakeToCamel<S extends string> = S extends `${infer L}_${infer R}` ? `${L}${Capitalize<SnakeToCamel<R>>}` : S
