import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import Button from '@material-ui/core/Button';
import {TableStyled} from './styles';
import classNames from 'classnames';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import BlackArrowDropDown from '../../assets/arrow-dropdown-black.svg';
import IconButton from '@material-ui/core/IconButton';

class TableComponent extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    getTableHeaders = (tableHeader) => {
        return tableHeader.map((col) => {
            return <TableCell className="" key={col.id}>{col.name}</TableCell>
        })
    }

    getTableBodyCells = (inventoryList, date) => {
        const {tableHeaders} = this.props;
        const keys = Object.keys(inventoryList)

        const bodyCells = []
        const dateHeader = tableHeaders[0]
        bodyCells.push(<TableCell key={dateHeader.id} scope="row" rowSpan={keys.length}>{date}</TableCell>)
            
        keys.forEach((n) => {
            bodyCells.push(<TableCell rowSpan={inventoryList[n].length} scope="row">{n}</TableCell>)
        })

        keys.forEach((n) => {
            const modelKeys = Object.keys(n)
            modelKeys.forEach(m => {
                const cityKeys = Object.keys(m)
            })
           
        })



        return tableHeaders.map((header) => {
            return <TableCell key={header.id} scope="row" rowSpan={}>
                {(id === "date") ? date :
                inventory[header.id]}
                </TableCell>
            }
        )

        const obj = {
            "2013-09-20": {
            "Suzuki": {
              "Swift": {
                "Bangalore": [
                  {
                    "total_leads": 4,
                    "total_sales": 2,
                    "total_cash": 289000,
                    "discount": 20000
                  }
                ]
              },
              "totalCityCount": 1
            }
          }
        }

        const newRes = {"2013-09-20": [{name: "suzuki", model: "Swift", cityData: {
            cityName: "",
            total_sales: "",
            total_leads: "",
            total_cash: "",
            discount: ""
        }}]}
    }

    getNestedTableRows = (count) => {
        const arr = []
        for(let i=0; i<count; i++) {
            arr.push(
                <TableRow key={key} rowSpan={rowCount}>
                    <TableCell></TableCell>
                </TableRow>
            )
        }
        return arr
    }

    
    
    getFirstRowModel = (obj) => {
        const modelKeys = Object.keys(obj)
        modelKeys.map((key) => {
            const cities = Object.keys(obj[key])
            return <React.Fragment>
                    <TableCell>{key}</TableCell>
                    {cities.map((n) => {
                        return <TableCell>{n}</TableCell>
                        obj[key][n].map((m) => {
                            return <React.Fragment>
                            <TableCell>{m.totalLeads}</TableCell>
                            <TableCell>{m.totalSales}</TableCell>
                            <TableCell>{m.totalCash}</TableCell>
                            <TableCell>{m.discount}</TableCell>
                            </React.Fragment>
                        })
                    })}
                </React.Fragment>
        })
    }


    getTableBody = (tableData) => {
        const {rowsPerPage, page} = this.state;
        const {showPagination} = this.props;
        const dateList = Object.keys(tableData)
        return dateList.map((key) => {
            const rowCount = this.getTotalRowCount(tableData[key])
            const mfgName = this.getMfgObject(tableData[key])
            return <React.Fragment>
                    <TableRow key={key} rowSpan={rowCount}>
                        <TableCell>{key}</TableCell>
                        <TableCell>{mfgName}</TableCell>
                        {this.getFirstRowModel(tableData[key][mfgName])}
                    </TableRow>
                    {...this.getNestedTableRows(rowCount)}
                </React.Fragment>
        });



        dateList.forEach((key) => {
            const mfgKeys = tableData[key]
            mfgKeys.forEach((n) => {
                const modelKeys = Object.keys(n)
                modelKeys.forEach(m => {
                    const cityKeys = Object.keys(m)
                })
               
            })
        })
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
        const {rowsPerPage, page} = this.state;
        const keysArr = Object.keys(tableData)
        return (
            <TableStyled>
            <Paper className="">
                <Table className="">
                    <TableHead>
                        <TableRow>
                            {this.getTableHeaders(tableHeaders)}
                        </TableRow>
                    </TableHead>
                    <TableBody>{this.getTableBody(tableData)}</TableBody>
                </Table>
            </Paper></TableStyled>
        )
    }
}

export default TableComponent;