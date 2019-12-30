import React from 'react'
import Container from './container'
import {ContainerStyled} from './styles'

class Dashboard extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.map = {}
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
    }

    parseLeads = (leads) => {
        leads.forEach(n => {
            const {city, inventory, model, date} = n;
            if (!this.map[date]) {
                this.map[date] = {}
            }
            if (!this.map[date][inventory]) {
                this.map[date][inventory] = {}
                this.map[date][inventory].totalRowCount = 0
            }
            if (!this.map[date][inventory][model]) {
                this.map[date][inventory][model] = {}
            }
            if (!this.map[date][inventory][model][city]) {
                this.map[date][inventory][model][city] = []
                this.map[date][inventory].totalRowCount += 1 
            }
            this.updateCityDataInMap(this.map[date][inventory][model][city], n)
        })
    }

    updateCityDataInMap = (obj, data) => {
        obj.push({
            "totalLeads": data.total_leads,
            "totalSales": data.total_sales,
            "totalCash": data.total_cash,
            "discount": data.discount
        })
    }


    render () {
        const {isLoading} = this.props
        return (
            <ContainerStyled>
                <div>Home</div>
            </ContainerStyled>
        );
    }
}

export default Container(Dashboard)