const MOUNTAINS = [
  { name: "Kilimanjaro", height: 5895, place: "Tanzania" },
  { name: "Everest", height: 8848, place: "Nepal" },
  { name: "Mount Fuji", height: 3776, place: "Japan" },
  { name: "Vaalserberg", height: 323, place: "Netherlands" },
  { name: "Denali", height: 6168, place: "United States" },
  { name: "Popocatepetl", height: 5465, place: "Mexico" },
  { name: "Mont Blanc", height: 4808, place: "Italy/France" }
];

function makingTable(data) {
  let table = document.createElement("table")
  let topCell
  let topRow = document.createElement("tr")
  for (const key in data[0]) {
    topCell = document.createElement("th")
    let cell = document.createTextNode(key)
    topCell.appendChild(cell)
    topRow.appendChild(topCell)
  }
  table.appendChild(topRow)
  let row

  for (let i = 0; i < data.length; i++) {
    row = document.createElement("tr")

    for (const key in data[i]) {
      let cell = document.createElement("td")
      let cellInput = document.createTextNode(data[i][key])
      if (typeof data[i][key] == "number") {
        cell.style.textAlign = "right"
      }
      cell.appendChild(cellInput)
      row.appendChild(cell)
      table.appendChild(row)
    }
  }
  table.appendChild(row)
  return table;
}
document.querySelector("#mountains").appendChild(makingTable(MOUNTAINS))
