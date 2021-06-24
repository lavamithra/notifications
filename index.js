function Notification(props) {
  const { className, imagesource, messageText } = props;

  const containerCard = `notification-container ${className}`;

  return (
    <div className={containerCard}>
      <img className="logo" src={imagesource} />
      <p className="logotext">{messageText}</p>
    </div>
  );
}

const element = (
  <div class="bg-container">
    <div>
      <h1 className="notifications">Notifications</h1>
    </div>
    <div>
      <Notification
        imagesource="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        messageText="Information message"
        className="info"
      />
      <Notification
        imagesource="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        messageText="Success message"
        className="success"
      />
      <Notification
        imagesource="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        messageText="Warning message"
        className="warning"
      />
      <Notification
        imagesource="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        messageText="Error message"
        className="error"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
