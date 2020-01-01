import React from 'react'
import {Table} from 'react-bootstrap'
import {TableStyled} from './styles'

class TableComponent extends React.Component {
    
    constructor(props) {
        super(props)
    }

    getTableHeaders = (tableHeaders) => {
        return tableHeaders.map((col) => {
            return <td className="" key={col.id}>{col.name}</td>
        })
    }

    getTableBodyCells = (item) => {
        const {tableHeaders} = this.props;
        return tableHeaders.map((header) => {
            return <td key={header.id} scope="row">
                {item[header.id]}
                </td>
            }
        )
    }

    getTableBody = (tableData) => {
        return tableData.map((item) => {
            return (<tr key={item.id}>
                {this.getTableBodyCells(item)}
            </tr>)
        })
    }

    render () {
        const {tableData, tableHeaders} = this.props;
        return (
            <TableStyled>
                <Table className="" striped bordered hover>
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