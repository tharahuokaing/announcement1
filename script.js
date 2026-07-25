/**
 * Huokaing Thara Banking System - Announcement Controller
 */
(() => {
    "use strict";

    /**
     * Handle redirection safely with security logging.
     */
    window.handleBank1Redirect = function(event) {
        event.preventDefault();
        console.log("[SECURITY NOTICE] User redirected from Bank 2 audit notice to Bank 1.");
        window.location.href = event.target.href;
    };

    console.log("[ANNOUNCEMENT MODULE] Bilingual security notice loaded successfully.");
})();
