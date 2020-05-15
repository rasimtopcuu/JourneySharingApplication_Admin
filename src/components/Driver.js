import React, { Component } from 'react';
import Navbar from "./Navbar";

class DriverBan extends Component {
    render() {
        return (
            <div>
                    <Navbar/>
                    <br></br>
                    
                <div className="container-fluid">
                    <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Kullanıcılar</h6>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                            <tr>
                                <th>İsim</th>
                                <th>Soyisim</th>
                                <th>Yaş</th>
                                <th>E-mail</th>
                                <th>Cep telefonu</th>
                                <th>Yolculuk Sayısı</th>
                                <th>Kazanılan toplam ücret ₺</th>
                            
                            </tr>
                            </thead>
                            <tfoot>
                            <tr>
                                <th>İsim</th>
                                <th>Soyisim</th>
                                <th>Yaş</th>
                                <th>E-mail</th>
                                <th>Cep telefonu</th>
                                <th>Yolculuk Sayısı</th>
                                <th>Kazanılan toplam ücret ₺</th>
                            </tr>
                                </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>Remzi</td>
                                                <td>Çakır</td>
                                                <td>21</td>
                                                <td>remzicakir@gmail.com</td>
                                                <td>0531 823 93 43</td>
                                                <td>12</td>
                                                <td>321</td>
                                            </tr>
                                            <tr>
                                                <td>Remzi</td>
                                                <td>Çakır</td>
                                                <td>21</td>
                                                <td>remzicakir@gmail.com</td>
                                                <td>0531 823 93 43</td>
                                                <td>12</td>
                                                <td>321</td>
                                            </tr> <tr>
                                                <td>Remzi</td>
                                                <td>Çakır</td>
                                                <td>21</td>
                                                <td>remzicakir@gmail.com</td>
                                                <td>0531 823 93 43</td>
                                                <td>12</td>
                                                <td>321</td>
                                            </tr> <tr>
                                                <td>Remzi</td>
                                                <td>Çakır</td>
                                                <td>21</td>
                                                <td>remzicakir@gmail.com</td>
                                                <td>0531 823 93 43</td>
                                                <td>12</td>
                                                <td>321</td>
                                            </tr> <tr>
                                                <td>Remzi</td>
                                                <td>Çakır</td>
                                                <td>21</td>
                                                <td>remzicakir@gmail.com</td>
                                                <td>0531 823 93 43</td>
                                                <td>12</td>
                                                <td>321</td>
                                            </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DriverBan;