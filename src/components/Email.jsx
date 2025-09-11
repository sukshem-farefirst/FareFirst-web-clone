import React from "react";
import "../css/email.css";

function Email() {
    return (
        <>
            <div className="maindiv">
                <div className="emailhead">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                        </svg>
                    </div>
                    <div className="text">
                        <h4>Subscribe to our newsletter</h4>
                        <p>We will occasionally send exclusive deals, travel tips and news.</p>
                    </div>
                </div>

                <div className="emaildiv">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        aria-label="Email"
                    />
                    <button className="button" type="button">
                        Subscribe
                    </button>
                </div>
            </div>
        </>
    );
}

export default Email;
