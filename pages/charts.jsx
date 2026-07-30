import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const data = [
  { month: "Ju", income: 4000 },
  { month: "Au", income: 1500 },
  { month: "Se", income: 3000 },
  { month: "Oc", income: 2600 },
  { month: "No", income: 1500 },
  { month: "De", income: 500 },
];

export default function Chart() {
  return (
    <BarChart width={450} height={300} data={data}>
      <CartesianGrid strokeDasharray="5 5" vertical={false} />
      <XAxis dataKey="month" />
      <YAxis />
      <Bar dataKey="income" fill="#FF8C38" radius={[6, 6, 0, 0]} />
    </BarChart>
  );
}