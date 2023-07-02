const Tweet = (props) => {
  return (
    <div class="style">
        
      <h4>{props.name}  
      
      <h5>@{props.user}</h5>
      
      </h4>
      
      
      
      <p>{props.tweet}</p>
      <h6>{props.date}</h6>
    </div>
  );
};

