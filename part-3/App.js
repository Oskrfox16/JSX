const App = () => {
    return(
        <div>
        <Person name="Oscar" age={30} hobbies={["Swimming", "VideoGames","Music"]} />
        <Person name="Martin"  hobbies={["Tennis", "VideoGames","Piano"]} />
        <Person name="Michelle" age={16} hobbies={["Swimming", "Cook","Dance"]} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"));