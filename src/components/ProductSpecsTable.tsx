export function ProductSpecsTable({ data }: { data: { label: string; value: string }[] }) {
  return (
    <table className="w-full table-auto border border-gray-200 mt-4">
      <thead>
        <tr>
          <th className="p-2 text-left font-semibold bg-gray-50">Property</th>
          <th className="p-2 text-left font-semibold bg-gray-50">Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i} className="border-t">
            <td className="p-2 font-semibold bg-gray-50">{row.label}</td>
            <td className="p-2">{row.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
