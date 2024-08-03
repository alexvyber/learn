const csvData = "..."

const rawRows = csvData.split("\n")
const headers = rawRows[0].split(",")

const rows = rawRows.slice(1).map((rowStr) => {
  const row = {}

  rowStr.split(",").forEach((val, j) => {
    row[headers[j]] = val
  })

  return row
})

const rows1 = rawRows
  .slice(1)
  .map((rowStr) => rowStr.split(",").reduce((row, val, i) => ((row[headers[i]] = val), row), {}))

interface BasketballPlayer {
  name: string
  team: string
  salary: number
}
declare const rosters: { [team: string]: BasketballPlayer[] }

let allPlayers: BasketballPlayer[] = []
for (const players of Object.values(rosters)) {
  allPlayers = allPlayers.concat(players)
}

const allPlayers1 = Object.values(rosters).flat()

const teamToPlayers: { [team: string]: BasketballPlayer[] } = {}

for (const player of allPlayers) {
  const { team } = player
  teamToPlayers[team] = teamToPlayers[team] || []
  teamToPlayers[team].push(player)
}

for (const players of Object.values(teamToPlayers)) {
  players.sort((a, b) => b.salary - a.salary)
}

const bestPaid = Object.values(teamToPlayers).map((players) => players[0])
bestPaid.sort((playerA, playerB) => playerB.salary - playerA.salary)
console.log(bestPaid)
