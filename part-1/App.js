const App = () => {
    return(
    <div>
        <FirstComponent />
        <NamedComponents name="Oscar" />

    </div>
    );
};

ReactDOM.render(<App />, document.getElementById("root"));

