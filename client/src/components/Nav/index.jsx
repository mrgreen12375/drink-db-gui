import React from "react";

function Nav() {

	return (
        <nav>
            <ul>
            <li><a id='getButton' href="/get">GET</a></li>
            <li><a id='postButton' href="/post">POST</a></li>
            <li><a id='putButton' href="/put">PUT</a></li>
            <li><a id='deleteButton' href="/delete">DELETE</a></li>
            </ul>
        </nav>
	);
}

export default Nav;