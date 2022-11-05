import React from 'react';
import { Link } from 'react-router-dom';

export default function DonorNotification() {
    return (
        <>
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td style={{ fontSize: "18px" }}><Link to="/usersProfile">Farhan Hassan Jabil</Link> has accept your <Link to="/donationRequest">donation</Link>. Please go to the location ASAP.</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
