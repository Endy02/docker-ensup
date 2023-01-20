import React from 'react'
import Sidebar from '../../layers/Sidebar'

const Clients = () => {
  return (
    <>
    <div className='admin-container'>
      <Sidebar />
      <div className="case-command-gray">
        <div className="case-dashboard-inner">
          <table className="table-dashboard white-text">
            <thead>
              <tr>
                <th className="td-dashboard">Nom</th>
                <th className="td-dashboard">Prénom</th>
                <th className="td-dashboard">Email</th>
                <th className="td-dashboard">Date de création</th>
              </tr>
            </thead>
            <tbody>
              <tr className="tr-dashboard">
                <td className="td-dashboard">Nom </td>
                <td className="td-dashboard">Prénom</td>
                
                <td className="td-dashboard">mail user</td>
                <td className="td-dashboard">16/01/2023</td>
              </tr>
              <tr className="tr-dashboard">
                <td className="td-dashboard">Nom </td>
                <td className="td-dashboard">Prénom</td>
                <td className="td-dashboard">mail user</td>
                <td className="td-dashboard">16/01/2023</td>
              </tr>
              <tr className="tr-dashboard">
                <td className="td-dashboard">Nom </td>
                <td className="td-dashboard">Prénom</td>
                <td className="td-dashboard">mail user</td>
                <td className="td-dashboard">16/01/2023</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Clients