import React from "react";
import Sidebar from "../../layers/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="admin-container">
        <Sidebar />
        <div className="dashboard">
          <div className="flex-row-around">
            <div className="dash-selector">
            <div className="icon-small">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"/>
                </svg>
              </div>
              <p className="medium-text bold-text black-text">Janvier</p>
              <div className="icon-small">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"/>
                </svg>
              </div>
            </div>
            <p className="medium-text bold-text black-text">Laurent Gina</p>
          </div>
          <div className="grille">
            <div className="case-dashboard-turquoise grid-c11">
              <div className="titre-dashboard">Chiffre d'affaire annuel</div>
              <div className="text-dashboard">1 550 000€</div>
            </div>
            <div className="case-dashboard-orangered grid-c22">
              <div className="titre-dashboard">Chiffre d'affaire mensuel</div>
              <div className="text-dashboard">550 000€</div>
            </div>
            <div className="case-dashboard-purple grid-c11">
              <div className="titre-dashboard">Nombre clients</div>
              <div className="circle-dashboard violet-text">75</div>
            </div>
            <div className="case-dashboard-turquoise grid-c22">
              <div>Historique</div>
              <div>
                <table className="table-dashboard">
                  <tbody>
                    <tr className="tr-dashboard">
                      <td className="td-dashboard">Damn</td>
                      <td className="td-dashboard">That's a test brother</td>
                      <td className="td-dashboard">another col</td>
                      <td className="td-dashboard">01/02/2023</td>
                    </tr>
                    <tr className="tr-dashboard">
                      <td>Damn</td>
                      <td>That's a test brother</td>
                      <td>another col</td>
                      <td>01/02/2023</td>
                    </tr>
                    <tr className="tr-dashboard">
                      <td>Damn</td>
                      <td>That's a test brother</td>
                      <td>another col</td>
                      <td>01/02/2023</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="case-dashboard-orangered">
              <div className="titre-dashboard">Commandes en cours</div>
              <div className="text-dashboard">75</div>
            </div>
            <div className="case-dashboard-orange">
              <div className="titre-dashboard">Commandes annulées</div>
              <div className="text-dashboard">75</div>
            </div>
            <div className="case-dashboard-purple">
              <div className="titre-dashboard">Commandes terminées</div>
              <div className="text-dashboard">75</div>
            </div>
          </div>
        </div>
        <div className="separator"></div>
      </div>
    </>
  );
};

export default Dashboard;
