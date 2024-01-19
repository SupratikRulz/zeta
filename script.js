let start = document.getElementById("start")


function createTable(_fixedHeader, _data, _filter, _sortableObjects) {
    const header = [...Object.keys(_data[0])]
    const tableHeaderElement = document.createElement('div')

    const filterState = {
        name: 'S',
        date: 'sat'
    }

    // currentFilteredData

    inputFiled.onchange = function (e) {

        const nameText = e.target.value

        if (filterState.name.includes(nameText)) {
            currrFilterData.filter(data => data.name.includes(nameText))
        } else {
            wholedata.filter() //name, date
        }

        filterState.name = nameText;
        // const dateText = "sa"
        const fileteredDataName = searchFilter(nameText, _data, 'name')
    }





    tableHeaderElement.style = `display:flex;flex-direction:row;gap:100px;${_fixedHeader ? 'width: 100vw;position:sticky;top:0' : ''}`
    // start.style = _fixedHeader ? 'padding-top: 16px;' : ''
    header.forEach(function (element) {
        const childElement = document.createElement('div')
        childElement.innerHTML = element
        tableHeaderElement.appendChild(childElement)
    })

    start.appendChild(tableHeaderElement)

    _data.forEach(function (dataElement) {
        const rowDiv = document.createElement('div')
        rowDiv.style = "display:flex;flex-direction:row;gap:100px"


        header.forEach((keyName) => {
            const rowData = document.createElement("div")
            rowData.innerHTML = dataElement[keyName]

            rowDiv.appendChild(rowData)
        })
        start.appendChild(rowDiv)
    })

}

function searchFilter(searchText, data, filter) {
    const searchData = []
    for (var element of data) {
        // for (var filterProp of filter) {
        if (element[filter].toString().toLowerCase().includes(searchText.toLowerCase())) {
            searchData.push(element)
            break
        }
        // }
    }
    return searchData
}


//name____lname___fname
//""        ""     ""               //data-> 1000
//"Su"      ""     ""               // data1 -> 120
//"Sup"    "hg"   "fk"               // data -> 150 -> 100 -> 50
//"Su"      "B"   ""               // data3 -> 60
//"S"       "Ba"   ""               // data2 -> 60




let fixedHeader = true
let data = [{
    name: 'Supratik',
    age: 29,
    date: new Date('12-02-1995')
}, {
    name: 'ratik',
    age: 9,
    date: new Date('1-15-2030')
}, {
    name: 'Suk',
    age: 2,
    date: new Date('10-10-2020')
}, {
    name: 'pratik',
    age: 50,
    date: new Date('10-06-2004')
}, {
    name: 'Sup',
    age: 66,
    date: new Date('12-12-1925')
},];

let filter = ['name', 'date', 'age']
let sortableObjects = ['name', 'age']





createTable(fixedHeader, data, filter, sortableObjects)
console.log(searchFilter('sat', data, 'date'))