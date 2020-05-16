import React, { Component } from 'react';
import Navbar from "./Navbar";

class Journeys extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br></br> <br></br> <br></br>
                <div className="container-fluid">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#journeyFinish" >Yolculuğu Tamamlananlar</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#journeyContinue">Yolculuğu Devam Edenler</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#bonusUse" >Bonus Puan Kullananlar</a>
                        </li>
                    </ul>

                    <div class="tab-content">
                        <div class="tab-pane fade show active" id="journeyFinish" >
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Şöför İsim Soyisim</th>
                                                <th>Yolcu İsim Soyisim</th>
                                                <th>Alış Noktası</th>
                                                <th>Varış Noktası</th>
                                                <th>Yolculuk Mesafesi</th>
                                                <th>Yolculuk Tutarı</th>
                                                <th>Yolculuk Durumu</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            <tr>
                                                <th>Şöför İsim Soyisim</th>
                                                <th>Yolcu İsim Soyisim</th>
                                                <th>Alış Noktası</th>
                                                <th>Varış Noktası</th>
                                                <th>Yolculuk Mesafesi</th>
                                                <th>Yolculuk Tutarı</th>
                                                <th>Yolculuk Durumu</th>
                                            </tr>
                                        </tfoot>
                                        <tbody>
                                            <tr>
                                                <td>Remzi Çakır</td>
                                                <td>Ayşe Gülep</td>
                                                <td>Beyoğlu, Reis sk.</td>
                                                <td>Eyüpsultan, Kısmet sk.</td>
                                                <td>17 km</td>
                                                <td>35 ₺</td>
                                                <td className="bg-gradient-success">Tamamlandı</td>
                                            </tr>
                                            <tr>
                                                <td>Remzi Çakır</td>
                                                <td>Ayşe Gülep</td>
                                                <td>Beyoğlu, Reis sk.</td>
                                                <td>Eyüpsultan, Kısmet sk.</td>
                                                <td>39 km</td>
                                                <td>63 ₺</td>
                                            </tr> <tr>
                                                <td>Remzi Çakır</td>
                                                <td>Ayşe Gülep</td>
                                                <td>Beyoğlu, Reis sk.</td>
                                                <td>Eyüpsultan, Kısmet sk.</td>
                                                <td>31 km</td>
                                                <td>59 ₺</td>
                                            </tr> <tr>
                                                <td>Remzi Çakır</td>
                                                <td>Ayşe Gülep</td>
                                                <td>Beyoğlu, Reis sk.</td>
                                                <td>Eyüpsultan, Kısmet sk.</td>
                                                <td>23 km</td>
                                                <td>46 ₺</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>

                        <div class="tab-pane fade" id="journeyContinue" >

                        </div>

                        <div class="tab-pane fade" id="bonusUse" >
                            -
                           </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default Journeys;