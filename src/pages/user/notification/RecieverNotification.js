import React from 'react';
import { Link } from 'react-router-dom';

export default function RecieverNotification() {
    return (
        <>
            <table class="table">
                <tbody>
                    
                    <tr>
                        <th style={{ width: "15px" }} scope="row">1</th>
                        <td style={{ fontSize: "18px" }}>1 Donor has accept your <Link to="/donationRequest">donation request</Link>. Please go request page to confirm your donor.</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
