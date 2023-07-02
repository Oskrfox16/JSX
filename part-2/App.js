const App = () => {
    return (
        <div>
        <Tweet name="Lima" user='limex' date="04/16/2020" tweet="tweet twit tweet tweet"/>
        <Tweet name="Berry" user="b.berry" date="04/17/2020" tweet="HEY, HEY , HEY!!!"/>
        <Tweet name="Ramona" user="Ramonesss" date="06/11/2020" tweet="Give it back!!!! >:("/>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
