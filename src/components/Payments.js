import React, { Component } from 'react';
import Navbar from "./Navbar";

class Payments extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
              <thead>
                <tr>
                  <th>Yolculuk ID</th>
                  <th>İsim</th>
                  <th>Soyisim</th>
                  <th>CC No</th>
                  <th>CC Türü</th>
                  <th>CVV</th>
                  <th>Son Kullanma Tarihi</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Yolculuk ID</th>
                  <th>İsim</th>
                  <th>Soyisim</th>
                  <th>CC No</th>
                  <th>CC Türü</th>
                  <th>CVV</th>
                  <th>Son Kullanma Tarihi</th>
                </tr>
              </tfoot>
              <tbody>
                <tr>
                  <td>1425</td>
                  <td>Remzi</td>
                  <td>Çakır</td>
                  <td>4392 3233 9322 9324</td>
                  <td>Visa</td>
                  <td>746</td>
                  <td>09/22</td>
                </tr>
                <tr>
                  <td>1425</td>
                  <td>Remzi</td>
                  <td>Çakır</td>
                  <td>4392 3233 9322 9324</td>
                  <td>Visa</td>
                  <td>746</td>
                  <td>09/22</td>
                </tr>
                <tr>
                  <td>1425</td>
                  <td>Remzi</td>
                  <td>Çakır</td>
                  <td>4392 3233 9322 9324</td>
                  <td>Visa</td>
                  <td>746</td>
                  <td>09/22</td>
                </tr>
                <tr>
                  <td>1425</td>
                  <td>Remzi</td>
                  <td>Çakır</td>
                  <td>4392 3233 9322 9324</td>
                  <td>Visa</td>
                  <td>746</td>
                  <td>09/22</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

export default Payments;