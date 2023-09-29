export default function Owner() {
  return (
    <div className="owner message">
      <div className="messageInfo">
        <img
          src={
            "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/375460158_2025497934453711_684133762553375848_n.jpg?stp=dst-jpg_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=fe8171&_nc_ohc=gHmtvjPfwvYAX8OzyXv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDPxMEDza7VBdRzX7pjAGMqqmH5SS7VFpYMgbUKO3ekYA&oe=65166E38"
          }
          alt=""
        />
      </div>
      <div className="messageContent">
        <p>hello</p>
        {/* {message.img && <img src={message.img} alt="" />} */}
      </div>
    </div>
  );
}
