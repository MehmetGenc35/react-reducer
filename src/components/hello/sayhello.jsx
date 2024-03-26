import React from "react";
import { useStore } from "../../store";
import { Badge, Button } from "react-bootstrap";
import { userLogout } from "../../store/user/actions";
import { Link } from "react-router-dom";
const SayHello = () => {
    const { stateUser, dispatchUser } = useStore();
    const { isUserLogin, user } = stateUser;
    const handleLogout = () => {
        const res = confirm("Are you sure?");
        if (!res) return;
        localStorage.removeItem("token");
        dispatchUser(userLogout());
    };
    return (
        <h2 className="mb-4">
            Hello
            {isUserLogin ? (
                <>
                    <Badge bg="warning">
                        {user.firstName} {user.lastName}
                    </Badge>
                    <Button variant="danger" size="sm" onClick={handleLogout}>
                        Logout
                    </Button>
                </>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </h2>
    );
};
export default SayHello;
