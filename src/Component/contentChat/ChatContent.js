import "./chat.css";
import Messengers from "./messengers";
import InputBox from "./input";

export default function ChatContent() {
  return (
    <div className="ChatContent">
      <div className="ChatHeader">
        <div className="user">
          <img
            src={
              "https://scontent.fsgn16-1.fna.fbcdn.net/v/t39.30808-1/375460158_2025497934453711_684133762553375848_n.jpg?stp=dst-jpg_p100x100&_nc_cat=101&ccb=1-7&_nc_sid=fe8171&_nc_ohc=gHmtvjPfwvYAX8OzyXv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn16-1.fna&oh=00_AfDPxMEDza7VBdRzX7pjAGMqqmH5SS7VFpYMgbUKO3ekYA&oe=65166E38"
            }
            style={{ height: "28px", width: "28px", borderRadius: "50%" }}
            alt="avatar"></img>
          <span>Nam</span>
        </div>
        <div className="IconHeader">
          <svg
            fill="#0084ff"
            height="30px"
            role="presentation"
            viewBox="0 0 36 36"
            width="30px">
            <path d="M25.753 28.2c1.07-.357 1.816-1.275 2.423-2.225a2.05 2.05 0 00.037-2.151 4.998 4.998 0 00-.723-.963 11.594 11.594 0 00-2.888-2.112c-.58-.299-1.272-.212-1.808.159l-2.098 1.452a.472.472 0 01-.437.055 11.557 11.557 0 01-4.045-2.63 11.554 11.554 0 01-2.63-4.044.472.472 0 01.056-.437l1.453-2.098c.37-.536.457-1.228.158-1.807A11.587 11.587 0 0013.14 8.51a4.995 4.995 0 00-.963-.723 2.05 2.05 0 00-2.15.037c-.951.607-1.87 1.353-2.225 2.424-1.174 3.527 1.187 8.461 5.338 12.613 4.152 4.151 9.086 6.512 12.614 5.338z"></path>
          </svg>{" "}
          <svg
            fill="#0084ff"
            height="34px"
            role="presentation"
            viewBox="0 0 36 36"
            width="34px">
            <path d="M9 9.5a4 4 0 00-4 4v9a4 4 0 004 4h10a4 4 0 004-4v-9a4 4 0 00-4-4H9zm16.829 12.032l3.723 1.861A1 1 0 0031 22.5v-9a1 1 0 00-1.448-.894l-3.723 1.861A1.5 1.5 0 0025 15.81v4.38a1.5 1.5 0 00.829 1.342z"></path>
          </svg>{" "}
          <svg
            fill="#0084ff"
            height="28px"
            role="presentation"
            viewBox="0 0 36 36"
            width="28px">
            <path
              d="M12.5 18C12.5 19.2426 11.4926 20.25 10.25 20.25C9.00736 20.25 8 19.2426 8 18C8 16.7574 9.00736 15.75 10.25 15.75C11.4926 15.75 12.5 16.7574 12.5 18Z"
              fill="#0084ff"></path>
            <path
              d="M20.25 18C20.25 19.2426 19.2426 20.25 18 20.25C16.7574 20.25 15.75 19.2426 15.75 18C15.75 16.7574 16.7574 15.75 18 15.75C19.2426 15.75 20.25 16.7574 20.25 18Z"
              fill="#0084ff"></path>
            <path
              d="M25.75 20.25C26.9926 20.25 28 19.2426 28 18C28 16.7574 26.9926 15.75 25.75 15.75C24.5074 15.75 23.5 16.7574 23.5 18C23.5 19.2426 24.5074 20.25 25.75 20.25Z"
              fill="#0084ff"></path>
          </svg>
        </div>
      </div>
      <Messengers />
      <InputBox />
    </div>
  );
}
