'use strict';

const e = React.createElement;

function Selection(props) {
    return(
        e()
    );
}

class Quiz extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selecting: true,
            quizPath: ""
        }
    }

    handleClick(subject) {

    }

    render() {
        <div>hey look at me</div>
        /*
        if (this.state.selecting) {    
            return(
                <div className="quiz">
                    <div className="selection-container">
                        <Selection 
                            label="subject 1"
                            onClick={this.handleClick("subject1")}
                        />
                        <Selection 
                            label="subject 2"
                            onClick={this.handleClick("subject2")}
                        />
                        <Selection 
                            label="subject 3"
                            onClick={this.handleClick("subject3")}
                        />
                        <Selection 
                            label="subject 4"
                            onClick={this.handleClick("subject4")}
                        />
                    </div>
                </div>
            );
        }
        */
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root').textContent = "hi";
root.render(<Quiz/>);