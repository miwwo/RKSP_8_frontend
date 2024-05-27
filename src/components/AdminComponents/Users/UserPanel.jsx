// components/UserPanel.js
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { listUsers } from '../../../sevices/UserService';
import { useSelector } from "react-redux";

const UserPanel = () => {
    const { token} = useSelector((state) => state.user);
    const [users, setUsers] = useState([]);



    useEffect(() => {
        const fetchUsers = async () => {
            const data = await listUsers(token);
            setUsers(data);
        };
        fetchUsers();
    }, [token]);


    return (
        <div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((_user) => (
                        <TableRow key={_user.id}>
                            <TableCell>{_user.id}</TableCell>
                            <TableCell>{_user.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default UserPanel;
