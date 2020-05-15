import React, { Component } from 'react';

import Navbar from "./Navbar";

class UserBan extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <br></br>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ID: <input className="form-control" type="text"/>
                    </label>
                </form>
                <br></br>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Hesabı askıya al.</button>
                <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Emin misin?</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                                <div class="form-check form-check-inline">
                                    <input type="checkbox" class="form-check-input" id="materialInline1" />
                                    <label class="form-check-label" for="materialInline1">Süresiz</label>
                                </div>
                                <input className="form-control" type="datetime-local" value ="2020-08-19T13:45:00" id="example-datetime-local-input"></input>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Vazgeç</button>
                        <button type="button" className="btn btn-primary">Hesabı askıya al.</button>
                    </div>

                    </div>
                </div>
                </div>


            </div>
        );
    }
}

export default UserBan;