// Doubao AI support code

class DoubaoAI {
    constructor() {
        this.name = 'Doubao AI';
    }

    greet() {
        return `Hello from ${this.name}!`;
    }

    performAction(action) {
        switch (action) {
            case 'assist':
                return this.assistUser();
            case 'analyze':
                return this.analyzeData();
            default:
                return 'Unrecognized action!';
        }
    }

    assistUser() {
        return 'Assisting user...';
    }

    analyzeData() {
        return 'Analyzing data...';
    }
}

// Exporting the class for external use
module.exports = DoubaoAI;
