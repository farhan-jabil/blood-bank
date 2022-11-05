import React from 'react';
import { Link } from 'react-router-dom';

export default function FriendListNotification() {
    return (
        <>
            <table class="table">
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td style={{fontSize: "18px" }}><Link to="/usersProfile">Farhan Hassan Jabil</Link> has accept your friend request. You can now text him directly.</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
