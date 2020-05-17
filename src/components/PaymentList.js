import React, { Component } from 'react';
import Navbar from "./Navbar";

class PaymentList extends Component {
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
                                    <th>Tutar</th>
                                    <th>Ödeme Durumu</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Yolculuk ID</th>
                                    <th>İsim</th>
                                    <th>Soyisim</th>
                                    <th>Tutar</th>
                                    <th>Ödeme Durumu</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                    <td>1432</td>
                                    <td>Remzi</td>
                                    <td>Çakır</td>
                                    <td>43 ₺</td>
                                    <td className="bg-gradient-success text-white">Onaylandı</td>
                                </tr>
                                <tr>
                                    <td>1432</td>
                                    <td>Remzi</td>
                                    <td>Çakır</td>
                                    <td>43 ₺</td>
                                    <td className="bg-gradient-success text-white">Onaylandı</td>
                                </tr>
                                <tr>
                                    <td>1432</td>
                                    <td>Remzi</td>
                                    <td>Çakır</td>
                                    <td>43 ₺</td>
                                    <td className="bg-gradient-success text-white">Onaylandı</td>
                                </tr>
                                <tr>
                                    <td>1432</td>
                                    <td>Remzi</td>
                                    <td>Çakır</td>
                                    <td>43 ₺</td>
                                    <td className="bg-gradient-danger text-white">Onaylanmadı</td>
                                </tr>



                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default PaymentList;