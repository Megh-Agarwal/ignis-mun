import { Link } from 'react-router-dom'

import './Matrix.css'

const TH = ({ title }) => {
  return (
    <th
      scope="col"
      className="px-6 py-3 text-center text-lg font-medium text-gray-500 uppercase tracking-wider"
    >
      {title}
    </th>
  )
}

const Card = (props) => {
  const committee = props.countryData[0].committee.committee;

  return (
    <div class="card">
        <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <TH title="DELEGATE" />
                  { committee === "AIPPM" ? <TH title="DELEGATION" /> : <TH title="COUNTRY" /> }
                  { committee === "AIPPM" ? <TH title="PARTY" /> : null }
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {props.countryData.map((delegate) => (
                  <TableRow delegate={delegate} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

function TableRow({ delegate }) {
  const committee = delegate.committee.committee;
  return (
    <tr key={delegate.email}>
      <td className="px-6 py-4">
        <div className="">
          <div className="ml-4">
            <div className="text-sm text-center font-medium text-gray-900">{delegate.name}</div>
            <div className="text-sm text-center text-gray-500">{delegate.email}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">
          { committee === 'AIPPM' ? delegate.delegation : delegate.country }
        </div>
      </td>
      <td className="px-6 py-4">
        <div className="text-sm text-gray-900">
        { committee === 'AIPPM' ? delegate.pname : null }
        </div>
      </td>
    </tr>
  )
}


export default Card
