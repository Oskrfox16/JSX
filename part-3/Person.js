const Person = (props) => {
    let vote;
    if (props.age < 18){
        vote = "You must be 18";
    }else if(props.age > 18){
        vote = "Please go Vote!";
    }else{
        vote = "Please enter age!!!";
    }
  return (
    <div>
      <p>Learn some information about this person</p>
      <p>
        <b>Name:</b>
        {props.name}
        <p>
          <b>Age:</b>
          {props.age}
        </p>
        <h3>
          <b>{vote}</b>
          
        </h3>
        
          <b>Hobbies:</b>
          {props.hobbies.map((h) => (
            <li>
                {h}
            </li>
          ))}
        
      </p>
      <hr></hr>
    </div>
  );
};
