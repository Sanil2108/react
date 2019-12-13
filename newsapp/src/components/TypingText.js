import * as React from 'react';

const SLEEP_FRAMES_AFTER_COMPLETING = 10;
const WRITING_CHARS_SPEED = 80;
const DELETING_CHARS_SPEED = 30;

export default class TypingText extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentText: "",
            deleting: true,
            currentTextCounter: 0,
            currentTextLetterCounter: 0,
            framesToSleep: 0,
        }
    }

    componentDidMount() {
        this.setState({
            updateIntervalId: setInterval(this.update.bind(this), WRITING_CHARS_SPEED)
        });
    }

    handleSleepComplete() {
        this.setState({
            deleting: true,
        });
        clearInterval(this.state.updateIntervalId);
        this.setState({
            updateIntervalId: setInterval(this.update.bind(this), DELETING_CHARS_SPEED),
            framesToSleep: 0,
        });
    }

    updateWhenNotDeleting() {
        if (this.state.currentText.length === this.props.texts[this.state.currentTextCounter].length) {
            if (this.state.framesToSleep < SLEEP_FRAMES_AFTER_COMPLETING) {
                this.setState({
                    framesToSleep: this.state.framesToSleep + 1,
                })
            }
            else {
                this.handleSleepComplete();
            }
            return;
        }

        this.setState({
            currentText: this.state.currentText +
                this.props.texts[this.state.currentTextCounter][this.state.currentTextLetterCounter],
            currentTextLetterCounter: this.state.currentTextLetterCounter + 1,
        });
    }

    handleTextDeleted() {
        this.setState({
            currentTextCounter: (this.state.currentTextCounter + 1 === this.props.texts.length) ? 0 : this.state.currentTextCounter + 1,
            currentTextLetterCounter: 0,
            deleting: false,
        });
        clearInterval(this.state.updateIntervalId);
        this.setState({
            updateIntervalId: setInterval(this.update.bind(this), WRITING_CHARS_SPEED)
        });
    }

    updateWhenDeleting() {
        if (this.state.currentText.length === 0) {
            this.handleTextDeleted();
            return;
        }

        this.setState({
            currentText:
                this.state.currentText.slice(0, this.state.currentText.length - 1),
        });
    }

    update() {
        if (!this.state.deleting) {
            this.updateWhenNotDeleting();
        }
        else {
            this.updateWhenDeleting();
        }
    }

    render() {
        return <div className="SearchContainerHeading2">{this.props.pretext}{this.state.currentText}</div>
    }
}