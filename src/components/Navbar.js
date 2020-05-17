import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <ul className="navbar-nav bg-gradient-primary sidebar-dark accordion" id="accordionSidebar">
                    <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index">
                        <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-taxi"></i>
                        </div>
                        <div className="sidebar-brand-text mx-3">JSA Admin</div>
                    </a>
                    <hr className="sidebar-divider my-0" />
                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-white-600 small"> <h6>Admin 1</h6></span>
                        <img className="img-profile rounded-circle " src="https://source.unsplash.com/QAB-WJcbgJk/60x60" />
                    </a>

                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                            Profil
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                            Ayarlar
                        </a>
                        <a className="dropdown-item" href="#">
                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                            Activity Log
                        </a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="Logout" data-toggle="modal" data-target="#logoutModal">
                            <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                            Çıkış Yap
                        </a>
                    </div>

                    <li className="nav-item active">
                        <a className="nav-link" href="index">
                            <i class="fas fa-fw fa-tachometer-alt"></i>
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <hr className="sidebar-divider" />


                    <div className="sidebar-heading">
                        İşlemler
                            </div>
                    {/* USER NAV */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <i className="fas fa-fw fa-user"></i>
                            <span>Kullanıcı İşlemleri</span>
                        </a>

                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Kullanıcı İşlemleri:</h6>
                                <a className="collapse-item" href="User">Kullanıcı Listesi </a>
                                <a className="collapse-item" href="UserBan">Hesabı askıya alma</a>
                            </div>
                        </div>
                    </li>
                    {/* Driver NAV */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                            <i className="fas fa-fw fa-car-side"></i>
                            <span>Sürücü İşlemleri</span>
                        </a>

                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Sürücü İşlemleri:</h6>
                                <a className="collapse-item" href="Driver">    Sürücü Listesi      </a>
                                <a className="collapse-item" href="DriverBan"> Hesabı askıya alma </a>
                            </div>
                        </div>
                    </li>
                    {/* Journeys NAV */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                            <i className="fas fa-fw fa-car-side"></i>
                            <span>Yolculuk İşlemleri</span>
                        </a>

                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Yolculuk İşlemleri:</h6>
                                <a className="collapse-item" href="Journeys">Yolculuk Listesi</a>

                            </div>
                        </div>
                    </li>

                    {/* Payments NAV */}
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                            <i className="fas fa-fw fa-credit-card"></i>
                            <span>Ödeme İşlemleri</span>
                        </a>

                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionSidebar">
                            <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Ödeme İşlemleri:</h6>
                                <a className="collapse-item" href="Payments">Kredi Kartları </a>
                                <a className="collapse-item" href="PaymentList">Ödeme Listesi</a>
                            </div>
                        </div>
                    </li>


                    {/* Admin NAV */}
                    
                    
                   
                    <hr className="sidebar-divider d-none d-md-block" />
                </ul>
            </div>

        );
    }
}

export default Navbar;