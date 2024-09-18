import { formatter } from "../utill/investment";

const HEADER_DATA = ['Year','Investmet Value','interest(year)','Total Interest','Invested Capital'];

function Table({tableList}){
    
    return <section id="result">
        <table >
                <thead>
                    <tr>
                    <th>{HEADER_DATA[0]}</th>   
                    <th>{HEADER_DATA[1]}</th>
                    <th>{HEADER_DATA[2]}</th>
                    <th>{HEADER_DATA[3]}</th>
                    <th>{HEADER_DATA[4]}</th>                    
                    </tr>
                </thead>
                

            <tbody className="center">

                {tableList.map(element => {
                    return <tr key={element.id}>
                         <td> {element.year}</td>
                        <td> {formatter.format(element.valueEndOfYear)} </td>
                        <td>{formatter.format(element.interest)}</td>
                        <td>{formatter.format(element.totalInterest)}</td>                       
                        <td> {formatter.format(element.investedCapital)} </td>
                    </tr> 
                })}

            </tbody>
        </table>
  </section>

}

export default Table


