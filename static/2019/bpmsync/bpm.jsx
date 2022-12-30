class Main extends React.Component {
    render() {
        return (
            
            <p>Hello world!</p>
        );
    }
}
const mainContainer = document.querySelector("#content")
ReactDOM.render(<Main/>, mainContainer)