import React from "react"

export default function Info() {
    return(
        <header className="header">
            <img className="profile-picture" src="../images/profile-picture.jpeg" />
            <h1 className="name">Paolo Re</h1>
            <h4 className="work">Student</h4>
            <h6 className="website">paolore.website</h6>
            <div className="btn-container">
                <button className="email-btn">
                    <svg className="email-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/></svg>
                    Email
                </button>
                <button className="linkedIn-btn">
                    <svg className="linkedIn-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                    <path className="linkedIn-path" d="M19     0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>              
                    LinkedIn
                </button>
            </div>
        </header>
    )
}