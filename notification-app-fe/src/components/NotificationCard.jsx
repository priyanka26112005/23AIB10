import "./NotificationCard.css";

const typeColor = {
  placement: "blue",
  result: "green",
  event: "orange",
};

function NotificationCard(props) {
  
  var notification = props.notification;
  var title = notification.title;
  var message = notification.message;
  var type = notification.type;
  var createdAt = notification.createdAt;
  var read = notification.read;
  var cardClass = "notification-card";
  if (read) {
    cardClass = cardClass + " is-read";
  } else {
    cardClass = cardClass + " is-unread";
  }
  var color = typeColor[type];
  if (!color) {
    color = "default";
  }

 
  var dateObj = new Date(createdAt);
  var formattedDate = dateObj.toLocaleString();

  return (
    <div className={cardClass}>
      <div className="notification-card-header">
        <span className="notification-title">{title}</span>

        {type && (
          <span className={"notification-chip chip-" + color}>
            {type}
          </span>
        )}
      </div>

      <p className="notification-message">{message}</p>

      <span className="notification-time">{formattedDate}</span>
    </div>
  );
}

export default NotificationCard;