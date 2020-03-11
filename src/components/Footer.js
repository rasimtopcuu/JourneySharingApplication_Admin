import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div><div><div>
                                </div>
                   
                    <footer class="sticky-footer bg-white">
                        <div class="container my-auto">
                        <div class="copyright text-center my-auto">
                            <span>Copyright JSA</span>
                        </div>
                        </div>
                    </footer>
                    </div>
                </div>
                <a class="scroll-to-top rounded" href="#page-top">
                    <i class="fas fa-angle-up"></i>
                </a>
                <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Ayrılmak istiyor musun?</h5>
                        <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                        </div>
                        <div class="modal-body">Oturum kapanacak. Güvenli şekilde çıkış yapmak ister misin?</div>
                        <div class="modal-footer">
                        <button class="btn btn-secondary" type="button" data-dismiss="modal">Vazgeç</button>
                        <a class="btn btn-primary" href="login.php">Çıkış Yap</a>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;