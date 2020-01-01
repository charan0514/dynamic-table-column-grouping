import React from 'react'
import Container from './container'
import {ContainerStyled, TableWraperStyled, InputCmp} from './styles'
import Table from './Table'


class Dashboard extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            delimiter: ",",
            lineCount: 2,
            tableData: []
        }
        this.originalData = []
        this.tableHeaders = [
            {id: "name", name: "Name"}, {id: "street", name: "Street"}, {id: "city", name: "City"}, {id: "country", name: "Country"}, {id: "zipCode", name: "Zip Code"}
        ]
    }

    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
    }

    // parseLeads = (leads) => {
    //     let mapObj = {}
    //     leads.forEach(n => {
    //         const {city, inventory, model, date} = n;
    //         if (!mapObj[date]) {
    //             mapObj[date] = {}
    //         }
    //         if (!mapObj[date][inventory]) {
    //             mapObj[date][inventory] = {}
    //             mapObj[date][inventory].totalRowCount = 0
    //         }
    //         if (!mapObj[date][inventory][model]) {
    //             mapObj[date][inventory][model] = {}
    //         }
    //         if (!mapObj[date][inventory][model][city]) {
    //             mapObj[date][inventory][model][city] = {}
    //             mapObj[date][inventory].totalRowCount += 1 
    //         }
    //         //this.updateCityDataInMap(mapObj[date][inventory][model][city], n)
    //         mapObj[date][inventory][model][city].totalLeads = n.total_leads
    //         mapObj[date][inventory][model][city].totalSales = n.total_sales
    //         mapObj[date][inventory][model][city].totalCash = n.total_cash
    //         mapObj[date][inventory][model][city].discount = n.discount
    //         this.setState({
    //             map: mapObj
    //         })
    //     })
    // }

    updateCityDataInMap = (obj, data) => {
        obj.totalLeads = data.total_leads
        obj.totalSales = data.total_sales
        obj.totalCash = data.total_cash
        obj.discount = data.discount
    }

    handleFileUpload = e => {
        const fileUpload = e.target.files[0];
        if (!!fileUpload) {
            this.readFile(fileUpload)
        }
    }

    readFile = (fileUpload) => {
        if (fileUpload.type === "text/plain" || fileUpload.type === "text/csv") {
            if (typeof FileReader != "undefined") {
                const reader = new FileReader();

                reader.onload = e => {
                    const {result} = e.target
                    this.originalData = result.split(/\n/).filter(e => e !== "")
                    this.updateTableData()
                };

                reader.readAsText(fileUpload, "UTF-8");
        
            } else {
                alert("This browser does not support HTML5.");
            }
        } else {
            alert("Only .txt and .csv files are supported");
        }
    }

    updateTableData = () => {
        const {delimiter, lineCount} = this.state
        this.setState({
            tableData: this.updateTableItems(this.originalData, delimiter, lineCount)
        })
    }

    handleDelimiterChange = (e) => {
        //const copy = JSON.parse(JSON.stringify(this.originalData))
        const {lineCount} = this.state
        this.setState({
            delimiter: e.target.value,
            tableData: this.updateTableItems(this.originalData, e.target.value, lineCount)
        })
    }

    handleLineCountChange = (e) => {
        const {delimiter} = this.state
        if (e.target.value >= 2) {
            this.setState({
                lineCount: e.target.value,
                tableData: this.updateTableItems(this.originalData, delimiter, e.target.value)
            })
        }
    }

    updateTableItems = (arr, delimiter, lineCount) => {
        const tableData = []
        arr.forEach((n, i) => {
            const row = n.split(delimiter)
            const uId = (new Date().getTime().toString() + i)
            tableData.push({
                id: uId,
                name: !!row[0] ? row[0] : "",
                street: !!row[1] ? row[1] : "",
                city: !!row[2] ? row[2] : "",
                country: !!row[3] ? row[3] : "",
                zipCode: !!row[4] ? row[4] : "",
            })
        })
        return tableData.slice(0, lineCount)
    }

    dropHandler = (ev)=> {
        // Prevent default behavior (Prevent file from being opened)
        ev.preventDefault();
        ev.stopPropagation();
      
        const fileUpload = ev.dataTransfer.files[0]
        if (!!fileUpload) {
            this.readFile(fileUpload)
        }
    }

    dragOverHandler = (e) => {
        // Prevent default behavior (Prevent file from being opened)
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.dropEffect = 'copy';
    }


    render () {
        const {tableData, delimiter, lineCount} = this.state
        return (
            <ContainerStyled>
                <div className="file-upload-wrapper" onDrop={this.dropHandler}  onDragOver={this.dragOverHandler}>
                    <div>
                        <input
                            type="file"
                            name="tableData"
                            onChange={this.handleFileUpload}
                            accept=".csv,.txt"
                        />
                        <p>Drag file to this drop zone ...</p>
                    </div>
                </div>
                <TableWraperStyled>
                    <div className="table-filter-options">
                        <div>
                            <label htmlFor="delimiterInput" className="filter-label">Delimiter: </label>
                            <InputCmp id="delimiterInput" type="text" maxLength="1" value={delimiter} onChange={this.handleDelimiterChange}/>
                        </div>
                        <div>
                            <label htmlFor="lineCountInput" className="filter-label">Lines: </label>
                            <InputCmp id="lineCountInput" type="number" min="2" value={lineCount} onChange={this.handleLineCountChange}/>
                        </div>
                    </div>
                    {!!tableData.length && <Table tableData={tableData} tableHeaders={this.tableHeaders}/>}
                </TableWraperStyled>
            </ContainerStyled>
        );
    }
}

export default Container(Dashboard)