// =====================================
// Huokaing Thara Banking System
// AI Voice Reader
// =====================================

let speech = null;

function readAnnouncement() {

    if (!('speechSynthesis' in window)) {
        alert("Your browser does not support Speech Synthesis.");
        return;
    }

    // Stop any current speech
    window.speechSynthesis.cancel();

    const text = `
    System Status Announcement.

    Important update regarding Bank Two security penetration testing.

    Dear valued customers.

    Bank Two is currently undergoing comprehensive security penetration testing
    conducted by our Red Team and cybersecurity specialists.

    During this security audit,
    please continue all banking transactions using Bank One.

    Visit:
    https://tharahuokaing.github.io/bank1/

    We sincerely apologize for any inconvenience.

    Thank you for your patience,
    cooperation,
    and continued trust in Huokaing Thara Banking System.
    `;

    speech = new SpeechSynthesisUtterance(text);

    speech.lang = "en-US";
    speech.rate = 0.95;
    speech.pitch = 1.0;
    speech.volume = 1;

    // Try to use the best available English voice
    const voices = speechSynthesis.getVoices();

    const preferred =
        voices.find(v => v.name.includes("Google")) ||
        voices.find(v => v.name.includes("Microsoft")) ||
        voices.find(v => v.lang.startsWith("en"));

    if (preferred) {
        speech.voice = preferred;
    }

    speechSynthesis.speak(speech);
}

window.speechSynthesis.onvoiceschanged = () => {
    speechSynthesis.getVoices();
};