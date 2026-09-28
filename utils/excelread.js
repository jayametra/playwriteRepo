import XLSX from 'xlsx'

export function getData(row,col){
    const workbook=XLSX.readFile('testData/testData.xlsx') // store the excel data into workbook
    const sheet=workbook.Sheets['LoginPage'] // read the sheet from the excel and store it in sheet
    const celladdress=XLSX.utils.encode_cell({ // this method is to read the data from excel and convert to json 
        r:row-1, // zeroth row and zeroth column
        c:col-1
    })
    const cell=sheet[celladdress] // read the cell data
    return cell?cell.v:undefined // if no data in cell return undefined error
}