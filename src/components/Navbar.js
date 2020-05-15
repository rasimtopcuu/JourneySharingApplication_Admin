import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
              
                <div id="wrapper">
                        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                            



                            
                                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index">
                                <div className="sidebar-brand-icon rotate-n-15">
                                    <i className="fas fa-taxi"></i>
                                </div>
                                <div className="sidebar-brand-text mx-3">JSA Admin<sup>2</sup></div>
                            </a>
                            <hr className="sidebar-divider my-0" />
                            <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="mr-2 d-none d-lg-inline text-gray-600 small "> <h6>Admin1</h6></span>
                        <img className="img-profile rounded-circle" src="https://source.unsplash.com/QAB-WJcbgJk/60x60"/>
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
                            <a className="nav-link" href="istatistik.php">
                                <i class="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </a>
                            </li>
                            <hr className="sidebar-divider"/>

                            
                            <div className="sidebar-heading">
                            Interface
                            </div>
                            {/* USER NAV */}
                            <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-fw fa-cog"></i>
                                <span>Kullanıcı İşlemleri</span>
                            </a>

                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                <h6 className="collapse-header">Kullanıcı:</h6>
                                <a className="collapse-item" href="User">Kullanıcılar</a>
                                <a className="collapse-item" href="userSave">Kullanıcı Ekle</a>
                                <a className="collapse-item" href="user">Kullanıcı Banlama</a>
                                </div>
                            </div>
                            </li>
                            
                            {/* Admin NAV */}
                            <li className="nav-item">
                                <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
                                    <i className="fas fa-fw fa-wrench"></i>
                                    <span>Admin</span>
                                </a>

                                {/*
                                <div id="collapseUtilities" class="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
                                    <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Custom Utilities:</h6>
                                    <a className="collapse-item" href="utilities-color.php">Colors</a>
                                    <a className="collapse-item" href="utilities-border.php">Borders</a>
                                    <a className="collapse-item" href="utilities-animation.php">Animations</a>
                                    <a className="collapse-item" href="utilities-other.php">Other</a>
                                    </div>
                                </div>
                            */}
                                                                                                                                    
                            </li>
                            <hr className="sidebar-divider"/>
                            <div className="sidebar-heading">
                            Addons
                            </div>
                            <li className="nav-item">
                            <a className="nav-link" href="charts.php">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></a>
                            </li>
                            <hr className="sidebar-divider d-none d-md-block" />
                            

                            


                        </ul>
                        
<div className="content">sad</div>


                     </div>

                                    
            </div>

        );
    }
}

export default Navbar;