import React from 'react'

export default function ConfirmStatus() {
    return (
        <>
            <div className="siteLayoutMainBody">
                <div className="siteLayoutBody my-3">
                    <div className="confirmStatusHeader mb-4">
                        <h5>Confirmed Donation</h5>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Time</th>
                                <th scope='col'>Location</th>
                                <th scope='col'>Cancel</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Farhan Hassan Jabil</td>
                                <td>13 minutes ago</td>
                                <td>Lab One Blood Bank, Uttara</td>
                                <td>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmCancelModal">Cancel</button>
                                    <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Cancel</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>You sure you want to cancel?</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-danger">Ok</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Farhan Hassan Jabil</td>
                                <td>13 minutes ago</td>
                                <td>Lab One Blood Bank, Uttara</td>
                                <td>
                                    <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#confirmCancelModal">Cancel</button>
                                    <div className="modal fade" tabindex="-1" id='confirmCancelModal' aria-labelledby="confirmCancelModal" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title">Cancel</h5>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <p>You sure you want to cancel?</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                    <button type="button" className="btn btn-danger">Ok</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
