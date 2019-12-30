import React from 'react'
import {Table} from 'react-bootstrap'
import {TableStyled} from './styles'

class TableComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    getTableHeaders = (tableHeader) => {
        return tableHeader.map((col) => {
            return <td className="" key={col.id}>{col.name}</td>
        })
    }

    getTableBodyCells = (inventoryList, date) => {
        // const {tableHeaders} = this.props;
        // const keys = Object.keys(inventoryList)

        // const bodyCells = []
        // const dateHeader = tableHeaders[0]
        // bodyCells.push(<td key={dateHeader.id} scope="row" rowSpan={keys.length}>{date}</td>)
            
        // keys.forEach((n) => {
        //     bodyCells.push(<td rowSpan={inventoryList[n].length} scope="row">{n}</td>)
        // })

        // keys.forEach((n) => {
        //     const modelKeys = Object.keys(n)
        //     modelKeys.forEach(m => {
        //         const cityKeys = Object.keys(m)
        //     })
           
        // })



        // return tableHeaders.map((header) => {
        //     return <td key={header.id} scope="row">
        //         {(id === "date") ? date :
        //         inventory[header.id]}
        //         </td>
        //     }
        // )

        // const obj = {
        //     "2013-09-20": {
        //     "Suzuki": {
        //       "Swift": {
        //         "Bangalore": [
        //           {
        //             "total_leads": 4,
        //             "total_sales": 2,
        //             "total_cash": 289000,
        //             "discount": 20000
        //           }
        //         ]
        //       },
        //       "totalCityCount": 1
        //     }
        //   }
        // }

        // const newRes = {"2013-09-20": [{name: "suzuki", model: "Swift", cityData: {
        //     cityName: "",
        //     total_sales: "",
        //     total_leads: "",
        //     total_cash: "",
        //     discount: ""
        // }}]}
    }

    getNestedTableRows = (count, obj, mfgName) => {
        // const arr = []
        // for(let i=0; i<count; i++) {
        //     arr.push(
        //         <tr key={key}>
        //             <td></td>
        //             <td></td>
        //         </tr>
        //     )
        // }
        // return arr
    }

    
    
    getFirstRowModel = (obj, mfgName) => {
        const modelKeys = Object.keys(obj[mfgName])
        const key = modelKeys[0]
        // modelKeys.map((key) => {
            const cities = Object.keys(obj[key])
            const firstCity = cities[0]
            return <React.Fragment>
                    <td>{mfgName}</td>
                    <td>{key}</td>
                    <td>{firstCity}</td>
                    {obj[key][firstCity].map((m) => {
                        return <React.Fragment>
                            <td>{m.totalLeads}</td>
                            <td>{m.totalSales}</td>
                            <td>{m.totalCash}</td>
                            <td>{m.discount}</td>
                            </React.Fragment>
                        })
                    }
                </React.Fragment>
    }


    getTableBody = (tableData) => {
        const dateList = Object.keys(tableData)
        return dateList.map((key) => {
            const rowCount = this.getTotalRowCount(tableData[key])
            const mfgName = this.getMfgObject(tableData[key])
            return <React.Fragment>
                    <tr key={key}>
                        <td rowSpan={rowCount}>{key}</td>
                        {this.getFirstRowModel(tableData[key], mfgName)}
                    </tr>
                    {/* {...this.getNestedTableRows(rowCount, tableData[key], mfgName)} */}
                </React.Fragment>
        });
    }

    getMfgObject = (obj) => {
        const mfgKeys = Object.keys(obj)
        return mfgKeys[0]
    }

    getTotalRowCount = (obj) => {
        return obj[this.getMfgObject(obj)].totalCityCount
    }

    render () {
        const {tableHeaders, tableData, showPagination} = this.props;
        return (
            <TableStyled>
                <Table className="">
                    <thead>
                        <tr>
                            {this.getTableHeaders(tableHeaders)}
                        </tr>
                    </thead>
                    <tbody>{this.getTableBody(tableData)}</tbody>
                </Table>
            </TableStyled>
        )
    }
}

export default TableComponent;