import { BarChart,XAxis,YAxis,Bar,CartesianGrid } from "recharts"
export default function Income()
{
    const data = [
        { month: "Jun", income:6500},
        { month: "Ju", income: 4000 },
        { month: "Au", income: 1500 },
        { month: "Se", income: 3000 },
        { month: "Oc", income: 2600 },
        { month: "No", income: 1500 },
        { month: "De", income: 500 }
    ];
    const Transactions=[
        {amount:720, date:"1/12/22"},
        {amount:560, date:"10/11/22"},
        {amount:980, date:"23/11/22"}
    ]
    const maxIncome = Math.max(...data.map(item => item.income));
    const maxYAxis = Math.ceil(maxIncome / 1000) * 1000 + 1000;
    return(    
        <div className="IncomePage">
            <h1 style={{fontSize:"32px"}}>Income</h1>
            <p style={{color:"#4D4D4D"}}>Last <span style={{textDecoration:"underline",textUnderlineOffset:"4px",fontWeight:"bold"}}>30 days</span></p>
            <h1 style={{fontSize:"48px", fontWeight:"bolder"}}>$2,260</h1>
            <BarChart
                height="350px"
                width="100%"
                data={data}
                
            >
                <CartesianGrid strokeDasharray="15 8" vertical={false}/>
                <XAxis tickLine={false} axisLine={false} dataKey="month"/>
                <YAxis
                    tickFormatter={(value=>(`$${value>=1000?`${value/1000}k`:value}`))}
                    axisLine={false}
                    tickLine={false}
                    ticks={Array.from(
                        { length: maxYAxis / 1000 + 1 },
                        (_, i) => i * 1000
                    )}
                    tick={{
                        dx: -20
                    }}

                />
                <Bar barSize={40} dataKey="income" fill="#FF8C38" radius={[6,6,0,0]}/>
            </BarChart>
            <div className="TransactionsIncome">
                <div className="TransactionsIncome-head">
                    <h2>Your transactions ({3})</h2>
                    <p style={{color:"#4D4D4D"}}>Last <span style={{textDecoration:"underline",textUnderlineOffset:"4px",fontWeight:"bold"}}>30 days</span></p>
                </div>
                <div className="TransactionsIncome-transactions">
                    {
                        Transactions.map((trans)=>(
                            <div>
                                <h1>${trans.amount}</h1>
                                <p>{trans.date}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    ) 
}