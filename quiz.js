'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var e = React.createElement;

function Selection(props) {
    return e();
}

var Quiz = function (_React$Component) {
    _inherits(Quiz, _React$Component);

    function Quiz(props) {
        _classCallCheck(this, Quiz);

        var _this = _possibleConstructorReturn(this, (Quiz.__proto__ || Object.getPrototypeOf(Quiz)).call(this, props));

        _this.state = {
            selecting: true,
            quizPath: ""
        };
        return _this;
    }

    _createClass(Quiz, [{
        key: 'handleClick',
        value: function handleClick(subject) {}
    }, {
        key: 'render',
        value: function render() {
            React.createElement(
                'div',
                null,
                'hey look at me'
            );
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
    }]);

    return Quiz;
}(React.Component);

var root = ReactDOM.createRoot(document.getElementById('root'));
document.getElementById('root').textContent = "hi";
root.render(React.createElement(Quiz, null));